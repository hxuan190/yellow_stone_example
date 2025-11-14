// Original file: proto/geyser.proto

import type { Long } from '@grpc/proto-loader';

export interface GetBlockHeightResponse {
  'blockHeight'?: (number | string | Long);
}

export interface GetBlockHeightResponse__Output {
  'blockHeight'?: (string);
}
