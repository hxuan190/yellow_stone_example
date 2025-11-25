package main

import (
	"context"
	"encoding/json"
	"fmt"
	"os"
	"os/signal"
	"sync"
	"syscall"
	"time"
	"yellow_stone_example/proto"

	"github.com/gagliardetto/solana-go"
	"github.com/rs/zerolog/log"
	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials/insecure"
	"google.golang.org/grpc/keepalive"
	"google.golang.org/grpc/metadata"
)

type YellowstoneClient struct {
	client    proto.GeyserClient
	conn      *grpc.ClientConn
	jsonFile  *os.File
	jsonMutex sync.Mutex
	token     string
}

type AccountUpdateJSON struct {
	Timestamp time.Time `json:"timestamp"`
	Filters   []string  `json:"filters"`
	Pubkey    string    `json:"pubkey"`
	Lamports  uint64    `json:"lamports"`
	Owner     string    `json:"owner"`
	DataSize  int       `json:"data_size"`
	Data      string    `json:"data"`
}

func NewYellowstoneClient(serverAddr string, token string) (*YellowstoneClient, error) {

	conn, err := grpc.NewClient(serverAddr,
		grpc.WithTransportCredentials(insecure.NewCredentials()),
		grpc.WithKeepaliveParams(keepalive.ClientParameters{
			Time:                30 * time.Second,
			Timeout:             5 * time.Second,
			PermitWithoutStream: true,
		}),
	)
	if err != nil {
		return nil, fmt.Errorf("failed to connect: %v", err)
	}

	jsonFile, err := os.OpenFile("account_updates.json", os.O_APPEND|os.O_CREATE|os.O_WRONLY, 0644)
	if err != nil {
		return nil, fmt.Errorf("failed to open JSON file: %v", err)
	}

	return &YellowstoneClient{
		client:   proto.NewGeyserClient(conn),
		conn:     conn,
		jsonFile: jsonFile,
		token:    token,
	}, nil
}

func (yc *YellowstoneClient) Close() error {
	if yc.jsonFile != nil {
		yc.jsonFile.Close()
	}
	return yc.conn.Close()
}

func (yc *YellowstoneClient) getMetadata(ctx context.Context) context.Context {
	if yc.token != "" {
		md := metadata.New(map[string]string{"x-token": yc.token})
		return metadata.NewOutgoingContext(ctx, md)
	}
	return ctx
}

func (yc *YellowstoneClient) TestConnection(ctx context.Context) error {
	ctx = yc.getMetadata(ctx)

	pingResp, err := yc.client.Ping(ctx, &proto.PingRequest{Count: 1})
	if err != nil {
		return fmt.Errorf("ping failed: %v", err)
	}
	log.Info().Int32("count", pingResp.Count).Msg("Ping successful")

	versionResp, err := yc.client.GetVersion(ctx, &proto.GetVersionRequest{})
	if err != nil {
		return fmt.Errorf("version check failed: %v", err)
	}
	log.Info().Str("version", versionResp.Version).Msg("Version check successful")

	return nil
}

func (yc *YellowstoneClient) SubscribeToAccounts(ctx context.Context, accounts []string, owners []string) error {
	ctx = yc.getMetadata(ctx)

	req := &proto.SubscribeRequest{
		Transactions: map[string]*proto.SubscribeRequestFilterTransactions{
			"transaction_filter": {
				Accounts: accounts,
			},
		},
	}

	stream, err := yc.client.Subscribe(ctx)
	if err != nil {
		return fmt.Errorf("failed to subscribe: %v", err)
	}

	// Send subscription request
	if err := stream.Send(req); err != nil {
		return fmt.Errorf("failed to send request: %v", err)
	}

	log.Info().
		Strs("accounts", accounts).
		Strs("owners", owners).
		Msg("Subscription request sent")

	// Listen for updates
	go yc.handleUpdates(stream)

	return nil
}

func (yc *YellowstoneClient) handleUpdates(stream proto.Geyser_SubscribeClient) {
	for {
		update, err := stream.Recv()
		if err != nil {
			log.Error().Err(err).Msg("Stream receive error")
			return
		}

		// Handle account updates
		if account := update.GetAccount(); account != nil {
			yc.handleAccountUpdate(update.Filters, account)
		}

	}
}

func (yc *YellowstoneClient) handleAccountUpdate(filters []string, account *proto.SubscribeUpdateAccount) {
	log.Info().
		Strs("filters", filters).
		Str("pubkey", string(account.Account.Pubkey)).
		Uint64("lamports", account.Account.Lamports).
		Str("owner", string(account.Account.Owner)).
		Int("data_size", len(account.Account.Data)).
		Msg("Account update received")

	updateJSON := AccountUpdateJSON{
		Timestamp: time.Now(),
		Filters:   filters,
		Pubkey:    string(account.Account.Pubkey),
		Lamports:  account.Account.Lamports,
		Owner:     string(account.Account.Owner),
		DataSize:  len(account.Account.Data),
		Data:      fmt.Sprintf("%x", account.Account.Data),
	}

	yc.jsonMutex.Lock()
	defer yc.jsonMutex.Unlock()

	encoder := json.NewEncoder(yc.jsonFile)
	if err := encoder.Encode(updateJSON); err != nil {
		log.Error().Err(err).Msg("Failed to write to JSON file")
		return
	}

	if len(account.Account.Data) > 0 {
		log.Debug().
			Str("data_hex", fmt.Sprintf("%x", account.Account.Data[:min(32, len(account.Account.Data))])).
			Msg("Account data preview")
	}
}

func (yc *YellowstoneClient) SubscribeWithReconnection(ctx context.Context, accounts []string, owners []string) {
	for {
		if err := yc.SubscribeToAccounts(ctx, accounts, owners); err != nil {
			log.Error().Err(err).Msg("Subscription failed, retrying in 5 seconds")
			time.Sleep(5 * time.Second)
			continue
		}

		// If we reach here, the stream was closed
		log.Info().Msg("Stream closed, reconnecting...")
		time.Sleep(1 * time.Second)
	}
}

func min(a, b int) int {
	if a < b {
		return a
	}
	return b
}

func main() {
	serverAddr := "134.122.90.96:8888"
	if addr := os.Getenv("YELLOWSTONE_GRPC_ADDR"); addr != "" {
		serverAddr = addr
	}

	token := os.Getenv("X_TOKEN")
	if token == "" {
		token = "600a1d07-08eb-48eb-98c0-6e2ce8650a85"
	}

	log.Info().Str("server", serverAddr).Msg("Connecting to Lantern gRPC server")

	client, err := NewYellowstoneClient(serverAddr, token)
	if err != nil {
		log.Fatal().Err(err).Msg("Failed to create client")
	}
	defer client.Close()

	// Test connection
	ctx := context.Background()
	if err := client.TestConnection(ctx); err != nil {
		log.Fatal().Err(err).Msg("Connection test failed")
	}

	// Example accounts to subscribe to
	accounts := []string{
		"2w6P8h6DAxFU8TmfF9sSyJxKqditymLFHTTpxE94d6fq",
	}

	// Example program owners to subscribe to
	owners := []string{
		solana.SystemProgramID.String(),
		solana.TokenProgramID.String(),
		solana.Token2022ProgramID.String(),
		solana.SPLAssociatedTokenAccountProgramID.String(),
		solana.TokenMetadataProgramID.String(),
		solana.MemoProgramID.String(),
	}

	// Start subscription with reconnection
	go client.SubscribeWithReconnection(ctx, accounts, owners)

	// Wait for interrupt signal
	sigChan := make(chan os.Signal, 1)
	signal.Notify(sigChan, syscall.SIGINT, syscall.SIGTERM)

	log.Info().Msg("Client running. Press Ctrl+C to exit.")
	<-sigChan

	log.Info().Msg("Shutting down client...")
}
