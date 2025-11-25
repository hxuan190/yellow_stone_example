package main

import (
	"context"
	"fmt"
	"os"
	"os/signal"
	"strings"
	"sync"
	"syscall"
	"time"
	"yellow_stone_example/proto"

	"github.com/rs/zerolog/log"
	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials/insecure"
	"google.golang.org/grpc/keepalive"
	"google.golang.org/grpc/metadata"
)

type TestClient struct {
	client        proto.GeyserClient
	conn          *grpc.ClientConn
	token         string
	name          string
	targetAccount string
	mu            sync.Mutex
	events        []string
	totalUpdates  int
	deletions     int
}

func NewTestClient(serverAddr, token, name, targetAccount string) (*TestClient, error) {
	conn, err := grpc.NewClient(serverAddr,
		grpc.WithTransportCredentials(insecure.NewCredentials()),
		grpc.WithKeepaliveParams(keepalive.ClientParameters{
			Time:                30 * time.Second,
			Timeout:             5 * time.Second,
			PermitWithoutStream: true,
		}),
	)
	if err != nil {
		return nil, err
	}

	return &TestClient{
		client:        proto.NewGeyserClient(conn),
		conn:          conn,
		token:         token,
		name:          name,
		targetAccount: targetAccount,
		events:        []string{},
	}, nil
}

func (tc *TestClient) Close() error {
	return tc.conn.Close()
}

func (tc *TestClient) getMetadata(ctx context.Context) context.Context {
	if tc.token != "" {
		md := metadata.New(map[string]string{"x-token": tc.token})
		return metadata.NewOutgoingContext(ctx, md)
	}
	return ctx
}

func (tc *TestClient) SubscribeByAccount(ctx context.Context, account string) error {
	ctx = tc.getMetadata(ctx)

	req := &proto.SubscribeRequest{
		Accounts: map[string]*proto.SubscribeRequestFilterAccounts{
			"direct_account": {
				Account: []string{account},
			},
		},
	}

	stream, err := tc.client.Subscribe(ctx)
	if err != nil {
		return err
	}

	if err := stream.Send(req); err != nil {
		return err
	}

	log.Info().Str("client", tc.name).Str("account", account).Msg("Subscribed by ACCOUNT")

	go tc.handleUpdates(stream)
	return nil
}

func (tc *TestClient) SubscribeByOwner(ctx context.Context, owner string) error {
	ctx = tc.getMetadata(ctx)

	req := &proto.SubscribeRequest{
		Accounts: map[string]*proto.SubscribeRequestFilterAccounts{
			"by_owner": {
				Owner: []string{owner},
			},
		},
	}

	stream, err := tc.client.Subscribe(ctx)
	if err != nil {
		return err
	}

	if err := stream.Send(req); err != nil {
		return err
	}

	log.Info().Str("client", tc.name).Str("owner", owner).Msg("Subscribed by OWNER")

	go tc.handleUpdates(stream)
	return nil
}

func (tc *TestClient) handleUpdates(stream proto.Geyser_SubscribeClient) {
	for {
		update, err := stream.Recv()
		if err != nil {
			log.Error().Str("client", tc.name).Err(err).Msg("Stream error")
			return
		}

		if account := update.GetAccount(); account != nil {
			tc.logAccountUpdate(account)
		}
	}
}

func (tc *TestClient) logAccountUpdate(account *proto.SubscribeUpdateAccount) {
	tc.mu.Lock()
	defer tc.mu.Unlock()

	pubkey := string(account.Account.Pubkey)
	tc.totalUpdates++

	if pubkey != tc.targetAccount {
		return
	}

	lamports := account.Account.Lamports
	dataSize := len(account.Account.Data)
	isDeletion := lamports == 0 && dataSize == 0

	if isDeletion {
		tc.deletions++
	}

	event := fmt.Sprintf("[%s] Lamports: %d, DataSize: %d, Deletion: %v",
		time.Now().Format("15:04:05.000"), lamports, dataSize, isDeletion)

	tc.events = append(tc.events, event)

	logEvent := log.Info().
		Str("client", tc.name).
		Str("pubkey", pubkey).
		Uint64("lamports", lamports).
		Int("data_size", dataSize).
		Bool("is_deletion", isDeletion)

	if isDeletion {
		logEvent.Msg("🔴 DELETION DETECTED")
	} else {
		logEvent.Msg("✅ Account update")
	}
}

func (tc *TestClient) PrintStats() {
	tc.mu.Lock()
	defer tc.mu.Unlock()

	fmt.Printf("\n=== %s Statistics ===\n", tc.name)
	fmt.Printf("Total updates received: %d\n", tc.totalUpdates)
	fmt.Printf("Target account updates: %d\n", len(tc.events))
	fmt.Printf("Deletions detected: %d\n", tc.deletions)
	fmt.Printf("\nEvents for %s:\n", tc.targetAccount)
	if len(tc.events) == 0 {
		fmt.Printf("  (no events)\n")
	}
	for _, event := range tc.events {
		fmt.Printf("  %s\n", event)
	}
}

func main() {
	serverAddr := "134.122.90.96:8888"
	token := os.Getenv("X_TOKEN")
	if token == "" {
		token = "600a1d07-08eb-48eb-98c0-6e2ce8650a85"
	}

	testAccount := "2w6P8h6DAxFU8TmfF9sSyJxKqditymLFHTTpxE94d6fq"
	tokenProgramOwner := "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"

	fmt.Println("\n=== Testing Yellowstone Account Deletion Notifications ===")
	fmt.Printf("Test account: %s\n", testAccount)
	fmt.Printf("Token Program: %s\n\n", tokenProgramOwner)

	client1, err := NewTestClient(serverAddr, token, "DIRECT_ACCOUNT", testAccount)
	if err != nil {
		log.Fatal().Err(err).Msg("Failed to create client1")
	}
	defer client1.Close()

	client2, err := NewTestClient(serverAddr, token, "BY_OWNER", testAccount)
	if err != nil {
		log.Fatal().Err(err).Msg("Failed to create client2")
	}
	defer client2.Close()

	ctx := context.Background()

	if err := client1.SubscribeByAccount(ctx, testAccount); err != nil {
		log.Fatal().Err(err).Msg("Failed to subscribe client1")
	}

	if err := client2.SubscribeByOwner(ctx, tokenProgramOwner); err != nil {
		log.Fatal().Err(err).Msg("Failed to subscribe client2")
	}

	fmt.Println("✅ Both subscriptions active")
	fmt.Println("📊 Only showing updates for the target account")
	fmt.Println("🔴 Watching for deletion events (lamports=0, data_size=0)")
	fmt.Println("\nTrigger a CLOSE ACCOUNT transaction to test, or wait for activity")
	fmt.Println("Press Ctrl+C to exit and see statistics\n")

	sigChan := make(chan os.Signal, 1)
	signal.Notify(sigChan, syscall.SIGINT, syscall.SIGTERM)
	<-sigChan

	fmt.Println("\n" + strings.Repeat("=", 60))
	client1.PrintStats()
	client2.PrintStats()
	fmt.Println(strings.Repeat("=", 60))

	if client1.deletions > 0 && client2.deletions == 0 {
		fmt.Println("\n❌ ISSUE CONFIRMED: BY_OWNER subscription missed deletions!")
	} else if client1.deletions > 0 && client2.deletions > 0 {
		fmt.Println("\n✅ Both subscriptions received deletion notifications")
	} else {
		fmt.Println("\n⏳ No deletions occurred during this test")
	}
}
