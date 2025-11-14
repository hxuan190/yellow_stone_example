import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
import * as path from "path";
import type { ProtoGrpcType } from "./proto/geyser";
import type { GeyserClient } from "./proto/geyser/Geyser";
import type { SubscribeRequest } from "./proto/geyser/SubscribeRequest";
import { CommitmentLevel } from "./proto/geyser/CommitmentLevel";

async function main() {
  const endpoint = process.env.YELLOWSTONE_GRPC_ADDR || "134.122.90.96:8080";
  const token = process.env.X_TOKEN || "600a1d07-08eb-48eb-98c0-6e2ce8650a85";
  
  console.log(`Connecting to: ${endpoint}`);

  const protoPath = path.join(__dirname, "proto/geyser.proto");
  const packageDefinition = await protoLoader.load(protoPath, {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
    includeDirs: [path.join(__dirname, "proto")],
  });

  const proto = grpc.loadPackageDefinition(packageDefinition) as unknown as ProtoGrpcType;
  
  const credentials = grpc.credentials.createInsecure();
  const metadata = new grpc.Metadata();
  if (token) {
    metadata.add("x-token", token);
  }

  const client = new proto.geyser.Geyser(
    endpoint,
    credentials,
    {
      "grpc.max_receive_message_length": 64 * 1024 * 1024,
    }
  ) as GeyserClient;

  try {
    console.log("Testing connection...");
    
    const pingRequest = { count: 1 };
    const pingResponse = await new Promise((resolve, reject) => {
      client.ping(pingRequest, metadata, (err, response) => {
        if (err) reject(err);
        else resolve(response);
      });
    });
    console.log("Ping:", pingResponse);

    const versionRequest = {};
    const versionResponse = await new Promise((resolve, reject) => {
      client.getVersion(versionRequest, metadata, (err, response) => {
        if (err) reject(err);
        else resolve(response);
      });
    });
    console.log("Version:", versionResponse);

    await subscribe(client, metadata);
    
  } catch (error) {
    console.error("Error:", error);
  } 
}

async function subscribe(client: GeyserClient, metadata: grpc.Metadata) {
  const stream = client.subscribe(metadata);

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
    entry: {},
    blocks: {},
    blocksMeta: {},
    commitment: CommitmentLevel.CONFIRMED as any,
    accountsDataSlice: [],
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