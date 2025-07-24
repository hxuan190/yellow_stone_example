package main

import (
	"context"
	"fmt"
	"os"
	"os/signal"
	"syscall"
	"time"
	"yellow_stone_example/proto"

	"github.com/rs/zerolog/log"
	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials/insecure"
	"google.golang.org/grpc/keepalive"
)

type YellowstoneClient struct {
	client proto.GeyserClient
	conn   *grpc.ClientConn
}

func NewYellowstoneClient(serverAddr string) (*YellowstoneClient, error) {
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

	return &YellowstoneClient{
		client: proto.NewGeyserClient(conn),
		conn:   conn,
	}, nil
}

func (yc *YellowstoneClient) Close() error {
	return yc.conn.Close()
}

func (yc *YellowstoneClient) TestConnection(ctx context.Context) error {
	// Test ping
	pingResp, err := yc.client.Ping(ctx, &proto.PingRequest{Count: 1})
	if err != nil {
		return fmt.Errorf("ping failed: %v", err)
	}
	log.Info().Int32("count", pingResp.Count).Msg("Ping successful")

	// Test version
	versionResp, err := yc.client.GetVersion(ctx, &proto.GetVersionRequest{})
	if err != nil {
		return fmt.Errorf("version check failed: %v", err)
	}
	log.Info().Str("version", versionResp.Version).Msg("Version check successful")

	return nil
}

func (yc *YellowstoneClient) SubscribeToAccounts(ctx context.Context, accounts []string, owners []string) error {
	// Create subscription request
	req := &proto.SubscribeRequest{
		Accounts: map[string]*proto.SubscribeRequestFilterAccounts{
			"account_filter": {
				Account: accounts,
				Owner:   owners,
			},
		},
	}

	// Establish bidirectional stream
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

		// Handle slot updates
		if slot := update.GetSlot(); slot != nil {
			yc.handleSlotUpdate(update.Filters, &proto.SubscribeUpdate_Slot{Slot: slot})
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

	// Process account data here
	// You can decode the account data based on the owner program
	if len(account.Account.Data) > 0 {
		log.Debug().
			Str("data_hex", fmt.Sprintf("%x", account.Account.Data[:min(32, len(account.Account.Data))])).
			Msg("Account data preview")
	}
}

func (yc *YellowstoneClient) handleSlotUpdate(filters []string, slot *proto.SubscribeUpdate_Slot) {
	log.Info().
		Strs("filters", filters).
		Uint64("slot", slot.Slot.Slot).
		Uint64("parent", *slot.Slot.Parent).
		Str("status", slot.Slot.Status.String()).
		Msg("Slot update received")
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
	// Configure logging

	// Connect to Lantern's gRPC server
	serverAddr := "YOUR_ENDPOINT_HERE"
	if addr := os.Getenv("LANTERN_GRPC_ADDR"); addr != "" {
		serverAddr = addr
	}

	log.Info().Str("server", serverAddr).Msg("Connecting to Lantern gRPC server")

	client, err := NewYellowstoneClient(serverAddr)
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
		// Add your account public keys here
		// "YourAccountPublicKeyHere",
		// "AnotherAccountPublicKeyHere",
	}

	// Example program owners to subscribe to
	owners := []string{
		"FLUXubRmkEi2q6K3Y9kBPg9248ggaZVsoSFhtJHSrm1X", // FluxBeam program
		"TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",  // Token program
		"CAMMCzo5YL8w4VFF8KVHrK22GGUsp5VTaW7grrKgrWqK", // Raydium AMM
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
