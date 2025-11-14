// Original file: proto/geyser.proto

import type { Long } from '@grpc/proto-loader';

export interface SubscribeRequestFilterAccountsFilterMemcmp {
  'offset'?: (number | string | Long);
  'bytes'?: (Buffer | Uint8Array | string);
  'base58'?: (string);
  'base64'?: (string);
  'data'?: "bytes"|"base58"|"base64";
}

export interface SubscribeRequestFilterAccountsFilterMemcmp__Output {
  'offset'?: (string);
  'bytes'?: (Buffer);
  'base58'?: (string);
  'base64'?: (string);
}
