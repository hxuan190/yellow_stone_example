// Original file: proto/geyser.proto

import type { SubscribeRequestFilterAccountsFilter as _geyser_SubscribeRequestFilterAccountsFilter, SubscribeRequestFilterAccountsFilter__Output as _geyser_SubscribeRequestFilterAccountsFilter__Output } from '../geyser/SubscribeRequestFilterAccountsFilter';

export interface SubscribeRequestFilterAccounts {
  'account'?: (string)[];
  'owner'?: (string)[];
  'filters'?: (_geyser_SubscribeRequestFilterAccountsFilter)[];
}

export interface SubscribeRequestFilterAccounts__Output {
  'account'?: (string)[];
  'owner'?: (string)[];
  'filters'?: (_geyser_SubscribeRequestFilterAccountsFilter__Output)[];
}
