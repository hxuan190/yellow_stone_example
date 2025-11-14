// Original file: proto/geyser.proto

import type { Long } from '@grpc/proto-loader';

export interface GetSlotResponse {
  'slot'?: (number | string | Long);
}

export interface GetSlotResponse__Output {
  'slot'?: (string);
}
