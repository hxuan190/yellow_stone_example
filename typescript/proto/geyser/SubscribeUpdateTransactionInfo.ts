// Original file: proto/geyser.proto

import type { _solana_storage_ConfirmedBlock_Transaction, _solana_storage_ConfirmedBlock_Transaction__Output } from '../solana/storage/ConfirmedBlock';
import type { _solana_storage_ConfirmedBlock_TransactionStatusMeta, _solana_storage_ConfirmedBlock_TransactionStatusMeta__Output } from '../solana/storage/ConfirmedBlock';
import type { Long } from '@grpc/proto-loader';

export interface SubscribeUpdateTransactionInfo {
  'signature'?: (Buffer | Uint8Array | string);
  'isVote'?: (boolean);
  'transaction'?: (_solana_storage_ConfirmedBlock_Transaction | null);
  'meta'?: (_solana_storage_ConfirmedBlock_TransactionStatusMeta | null);
  'index'?: (number | string | Long);
}

export interface SubscribeUpdateTransactionInfo__Output {
  'signature'?: (Buffer);
  'isVote'?: (boolean);
  'transaction'?: (_solana_storage_ConfirmedBlock_Transaction__Output);
  'meta'?: (_solana_storage_ConfirmedBlock_TransactionStatusMeta__Output);
  'index'?: (string);
}
