// Original file: proto/geyser.proto

import type { SubscribeRequestFilterAccountsFilterMemcmp as _geyser_SubscribeRequestFilterAccountsFilterMemcmp, SubscribeRequestFilterAccountsFilterMemcmp__Output as _geyser_SubscribeRequestFilterAccountsFilterMemcmp__Output } from '../geyser/SubscribeRequestFilterAccountsFilterMemcmp';
import type { Long } from '@grpc/proto-loader';

export interface SubscribeRequestFilterAccountsFilter {
  'memcmp'?: (_geyser_SubscribeRequestFilterAccountsFilterMemcmp | null);
  'datasize'?: (number | string | Long);
  'tokenAccountState'?: (boolean);
  'filter'?: "memcmp"|"datasize"|"tokenAccountState";
}

export interface SubscribeRequestFilterAccountsFilter__Output {
  'memcmp'?: (_geyser_SubscribeRequestFilterAccountsFilterMemcmp__Output);
  'datasize'?: (string);
  'tokenAccountState'?: (boolean);
}
