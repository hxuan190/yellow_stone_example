import Client, { CommitmentLevel, SubscribeRequest } from "@triton-one/yellowstone-grpc";

async function main() {
  // Connect to Lantern's gRPC server
  const endpoint = process.env.LANTERN_GRPC_ADDR || "YOUR_ENDPOINT_HERE";
  const token = process.env.X_TOKEN; // Optional auth token
  
  console.log(`Connecting to: ${endpoint}`);

  // Create client
  const client = new Client(endpoint, token, {
    "grpc.max_receive_message_length": 64 * 1024 * 1024, // 64MiB
  });

  try {
    // Test connection
    console.log("Testing connection...");
    console.log("Ping:", await client.ping(1));
    console.log("Version:", await client.getVersion());

    // Subscribe to updates
    await subscribe(client);
    
  } catch (error) {
    console.error("Error:", error);
  } 
}

async function subscribe(client: Client) {
  // Create subscription stream
  const stream = await client.subscribe();

  // Handle stream events
  stream.on("data", (data) => {
    console.log("Received update:", JSON.stringify(data, null, 2));
    
    // TODO: Handle specific update types
  });

  stream.on("error", (error) => {
    console.error("Stream error:", error);
  });

  stream.on("end", () => {
    console.log("Stream ended");
  });

  stream.on("close", () => {
    console.log("Stream closed");
  });

  // Create subscribe request
  const request: SubscribeRequest = {
    accounts: {
      "my_accounts": {
        account: [], // Add specific account pubkeys here
        owner: [
          "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",  // SPL Token Program
          "YourProgramIdHere",              // System Program
        ],
        filters: []
      }
    },
    slots: {
      "my_slots": {
        filterByCommitment: true
      }
    },
    transactions: {},
    transactionsStatus: {},
    entry: {},
    blocks: {},
    blocksMeta: {},
    commitment: CommitmentLevel.CONFIRMED,
    accountsDataSlice: [],
    ping: undefined,
  };

  // Send subscription request
  await new Promise<void>((resolve, reject) => {
    stream.write(request, (err: Error | null) => {
      if (err) {
        reject(err);
      } else {
        console.log("Subscription request sent");
        resolve();
      }
    });
  });

  // Keep stream alive
  await new Promise<void>((resolve, reject) => {
    stream.on("error", reject);
    stream.on("end", resolve);
    stream.on("close", resolve);
  });
}

function getCommitmentString(level: number): string {
  switch (level) {
    case 0: return "PROCESSED";
    case 1: return "CONFIRMED"; 
    case 2: return "FINALIZED";
    default: return "UNKNOWN";
  }
}

// Handle graceful shutdown
process.on("SIGINT", () => {
  console.log("\nShutting down...");
  process.exit(0);
});

process.on("SIGTERM", () => {
  console.log("\nShutting down...");
  process.exit(0);
});

main().catch(console.error);