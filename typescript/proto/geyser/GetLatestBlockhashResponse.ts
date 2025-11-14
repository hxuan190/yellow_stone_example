// Original file: proto/geyser.proto

import type { Long } from '@grpc/proto-loader';

export interface GetLatestBlockhashResponse {
  'slot'?: (number | string | Long);
  'blockhash'?: (string);
  'lastValidBlockHeight'?: (number | string | Long);
}

export interface GetLatestBlockhashResponse__Output {
  'slot'?: (string);
  'blockhash'?: (string);
  'lastValidBlockHeight'?: (string);
}
