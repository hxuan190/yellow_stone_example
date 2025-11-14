// Original file: proto/geyser.proto

import type { Long } from '@grpc/proto-loader';

export interface SubscribeUpdateEntry {
  'slot'?: (number | string | Long);
  'index'?: (number | string | Long);
  'numHashes'?: (number | string | Long);
  'hash'?: (Buffer | Uint8Array | string);
  'executedTransactionCount'?: (number | string | Long);
}

export interface SubscribeUpdateEntry__Output {
  'slot'?: (string);
  'index'?: (string);
  'numHashes'?: (string);
  'hash'?: (Buffer);
  'executedTransactionCount'?: (string);
}
