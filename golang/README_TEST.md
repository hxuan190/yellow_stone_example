# Testing Yellowstone Account Deletion Notifications

## The Issue
When subscribing by **owner**, account deletion notifications (lamports=0, data=0) are NOT received.
When subscribing by **direct account**, deletion notifications ARE received.

## Test Account
`2w6P8h6DAxFU8TmfF9sSyJxKqditymLFHTTpxE94d6fq`

This account has multiple CLOSE ACCOUNT and CREATE ACCOUNT transactions visible on Solscan.

## How to Test

### Method 1: Run the comparison test (RECOMMENDED)
```bash
cd golang
go run test_deletion_main.go
```

Or build and run:
```bash
cd golang
go build -o test_deletion test_deletion_main.go
./test_deletion
```

This will:
1. Create two clients simultaneously
2. Client 1: Subscribe by DIRECT ACCOUNT
3. Client 2: Subscribe by OWNER (Token Program)
4. Wait for updates and log all events
5. Press Ctrl+C to see statistics

### Method 2: Test individually

**Test A: Subscribe by direct account**
```bash
# Edit main.go line 103-109 to use:
req := &proto.SubscribeRequest{
    Accounts: map[string]*proto.SubscribeRequestFilterAccounts{
        "direct_account": {
            Account: []string{"2w6P8h6DAxFU8TmfF9sSyJxKqditymLFHTTpxE94d6fq"},
        },
    },
}

go run main.go
```

**Test B: Subscribe by owner**
```bash
# Edit main.go line 103-109 to use:
req := &proto.SubscribeRequest{
    Accounts: map[string]*proto.SubscribeRequestFilterAccounts{
        "by_owner": {
            Owner: []string{"TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"},
        },
    },
}

go run main.go
```

## Expected Results

### Direct Account Subscription (Test A)
✅ Will receive notifications when account is:
- Created (lamports > 0, data > 0)
- Updated (lamports changes, data changes)
- **Deleted (lamports = 0, data = 0)** ← THIS WORKS

### Owner Subscription (Test B)
✅ Will receive notifications when account is:
- Created (lamports > 0, data > 0)
- Updated (lamports changes, data changes)
❌ **Will NOT receive deletion notifications** ← THIS IS THE BUG

## How to Trigger a Test

Since the account already exists, you need to trigger a CLOSE ACCOUNT transaction:

1. Use Solana CLI or a wallet to close the account
2. Or wait for natural activity on this account
3. Watch the logs for `lamports: 0` and `data_size: 0`

## Workaround

If you need to track account deletions by owner:
1. First discover all accounts by owner
2. Subscribe to each account directly
3. Periodically refresh the account list

