// Original file: proto/geyser.proto

import type { Long } from '@grpc/proto-loader';

export interface SubscribeRequestAccountsDataSlice {
  'offset'?: (number | string | Long);
  'length'?: (number | string | Long);
}

export interface SubscribeRequestAccountsDataSlice__Output {
  'offset'?: (string);
  'length'?: (string);
}
