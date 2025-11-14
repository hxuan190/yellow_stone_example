// Original file: proto/geyser.proto

import type { SubscribeUpdateAccountInfo as _geyser_SubscribeUpdateAccountInfo, SubscribeUpdateAccountInfo__Output as _geyser_SubscribeUpdateAccountInfo__Output } from '../geyser/SubscribeUpdateAccountInfo';
import type { Long } from '@grpc/proto-loader';

export interface SubscribeUpdateAccount {
  'account'?: (_geyser_SubscribeUpdateAccountInfo | null);
  'slot'?: (number | string | Long);
  'isStartup'?: (boolean);
}

export interface SubscribeUpdateAccount__Output {
  'account'?: (_geyser_SubscribeUpdateAccountInfo__Output);
  'slot'?: (string);
  'isStartup'?: (boolean);
}
