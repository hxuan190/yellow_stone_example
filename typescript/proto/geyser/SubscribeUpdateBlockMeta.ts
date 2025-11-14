// Original file: proto/geyser.proto

import type { _solana_storage_ConfirmedBlock_Rewards, _solana_storage_ConfirmedBlock_Rewards__Output } from '../solana/storage/ConfirmedBlock';
import type { _solana_storage_ConfirmedBlock_UnixTimestamp, _solana_storage_ConfirmedBlock_UnixTimestamp__Output } from '../solana/storage/ConfirmedBlock';
import type { _solana_storage_ConfirmedBlock_BlockHeight, _solana_storage_ConfirmedBlock_BlockHeight__Output } from '../solana/storage/ConfirmedBlock';
import type { Long } from '@grpc/proto-loader';

export interface SubscribeUpdateBlockMeta {
  'slot'?: (number | string | Long);
  'blockhash'?: (string);
  'rewards'?: (_solana_storage_ConfirmedBlock_Rewards | null);
  'blockTime'?: (_solana_storage_ConfirmedBlock_UnixTimestamp | null);
  'blockHeight'?: (_solana_storage_ConfirmedBlock_BlockHeight | null);
  'parentSlot'?: (number | string | Long);
  'parentBlockhash'?: (string);
  'executedTransactionCount'?: (number | string | Long);
}

export interface SubscribeUpdateBlockMeta__Output {
  'slot'?: (string);
  'blockhash'?: (string);
  'rewards'?: (_solana_storage_ConfirmedBlock_Rewards__Output);
  'blockTime'?: (_solana_storage_ConfirmedBlock_UnixTimestamp__Output);
  'blockHeight'?: (_solana_storage_ConfirmedBlock_BlockHeight__Output);
  'parentSlot'?: (string);
  'parentBlockhash'?: (string);
  'executedTransactionCount'?: (string);
}
