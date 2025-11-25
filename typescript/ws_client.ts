import { WebSocket } from "ws";

type AccountSubscribeMessage = {
    jsonrpc: string;
    id: number;
    method: string;
    params: [string, { commitment: string; encoding: string }];
};

function main() {
    const ws_endpoint = process.env.WS_URL || "wss://ws.eu.fluxrpc.com";
    const ws = new WebSocket(ws_endpoint);
    
    ws.onopen = () => {
        console.log("Connected to the server");
        
        const subscribeMessage: AccountSubscribeMessage = {
            jsonrpc: "2.0",
            id: 1,
            method: "accountSubscribe",
            params: [
                "DB3sUCP2H4icbeKmK6yb6nUxU5ogbcRHtGuq7W2RoRwW",
                {
                    commitment: "finalized",
                    encoding: "base64"
                }
            ]
        };
        
        ws.send(JSON.stringify(subscribeMessage));
        console.log("Subscription request sent");
    };
    
    ws.onmessage = (event) => {
        try {
            const data = JSON.parse(event.data.toString());
            console.log("Received:", JSON.stringify(data, null, 2));
        } catch (error) {
            console.log("Received (raw):", event.data.toString());
        }
    };
    
    ws.onerror = (error) => {
        console.error("WebSocket error:", error);
    };
    
    ws.onclose = () => {
        console.log("Disconnected from the server");
    };
}

main();