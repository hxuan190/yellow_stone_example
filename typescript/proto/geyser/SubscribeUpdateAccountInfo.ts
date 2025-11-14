// Original file: proto/geyser.proto

import type { Long } from '@grpc/proto-loader';

export interface SubscribeUpdateAccountInfo {
  'pubkey'?: (Buffer | Uint8Array | string);
  'lamports'?: (number | string | Long);
  'owner'?: (Buffer | Uint8Array | string);
  'executable'?: (boolean);
  'rentEpoch'?: (number | string | Long);
  'data'?: (Buffer | Uint8Array | string);
  'writeVersion'?: (number | string | Long);
  'txnSignature'?: (Buffer | Uint8Array | string);
  '_txnSignature'?: "txnSignature";
}

export interface SubscribeUpdateAccountInfo__Output {
  'pubkey'?: (Buffer);
  'lamports'?: (string);
  'owner'?: (Buffer);
  'executable'?: (boolean);
  'rentEpoch'?: (string);
  'data'?: (Buffer);
  'writeVersion'?: (string);
  'txnSignature'?: (Buffer);
}
