// Original file: proto/geyser.proto

import type { Long } from '@grpc/proto-loader';

export interface IsBlockhashValidResponse {
  'slot'?: (number | string | Long);
  'valid'?: (boolean);
}

export interface IsBlockhashValidResponse__Output {
  'slot'?: (string);
  'valid'?: (boolean);
}
