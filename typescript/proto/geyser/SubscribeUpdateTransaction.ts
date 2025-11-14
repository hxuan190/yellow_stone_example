// Original file: proto/geyser.proto

import type { SubscribeUpdateTransactionInfo as _geyser_SubscribeUpdateTransactionInfo, SubscribeUpdateTransactionInfo__Output as _geyser_SubscribeUpdateTransactionInfo__Output } from '../geyser/SubscribeUpdateTransactionInfo';
import type { Long } from '@grpc/proto-loader';

export interface SubscribeUpdateTransaction {
  'transaction'?: (_geyser_SubscribeUpdateTransactionInfo | null);
  'slot'?: (number | string | Long);
}

export interface SubscribeUpdateTransaction__Output {
  'transaction'?: (_geyser_SubscribeUpdateTransactionInfo__Output);
  'slot'?: (string);
}
