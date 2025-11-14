// Original file: proto/geyser.proto

import type { _solana_storage_ConfirmedBlock_Rewards, _solana_storage_ConfirmedBlock_Rewards__Output } from '../solana/storage/ConfirmedBlock';
import type { _solana_storage_ConfirmedBlock_UnixTimestamp, _solana_storage_ConfirmedBlock_UnixTimestamp__Output } from '../solana/storage/ConfirmedBlock';
import type { _solana_storage_ConfirmedBlock_BlockHeight, _solana_storage_ConfirmedBlock_BlockHeight__Output } from '../solana/storage/ConfirmedBlock';
import type { SubscribeUpdateTransactionInfo as _geyser_SubscribeUpdateTransactionInfo, SubscribeUpdateTransactionInfo__Output as _geyser_SubscribeUpdateTransactionInfo__Output } from '../geyser/SubscribeUpdateTransactionInfo';
import type { SubscribeUpdateAccountInfo as _geyser_SubscribeUpdateAccountInfo, SubscribeUpdateAccountInfo__Output as _geyser_SubscribeUpdateAccountInfo__Output } from '../geyser/SubscribeUpdateAccountInfo';
import type { SubscribeUpdateEntry as _geyser_SubscribeUpdateEntry, SubscribeUpdateEntry__Output as _geyser_SubscribeUpdateEntry__Output } from '../geyser/SubscribeUpdateEntry';
import type { Long } from '@grpc/proto-loader';

export interface SubscribeUpdateBlock {
  'slot'?: (number | string | Long);
  'blockhash'?: (string);
  'rewards'?: (_solana_storage_ConfirmedBlock_Rewards | null);
  'blockTime'?: (_solana_storage_ConfirmedBlock_UnixTimestamp | null);
  'blockHeight'?: (_solana_storage_ConfirmedBlock_BlockHeight | null);
  'transactions'?: (_geyser_SubscribeUpdateTransactionInfo)[];
  'parentSlot'?: (number | string | Long);
  'parentBlockhash'?: (string);
  'executedTransactionCount'?: (number | string | Long);
  'updatedAccountCount'?: (number | string | Long);
  'accounts'?: (_geyser_SubscribeUpdateAccountInfo)[];
  'entriesCount'?: (number | string | Long);
  'entries'?: (_geyser_SubscribeUpdateEntry)[];
}

export interface SubscribeUpdateBlock__Output {
  'slot'?: (string);
  'blockhash'?: (string);
  'rewards'?: (_solana_storage_ConfirmedBlock_Rewards__Output);
  'blockTime'?: (_solana_storage_ConfirmedBlock_UnixTimestamp__Output);
  'blockHeight'?: (_solana_storage_ConfirmedBlock_BlockHeight__Output);
  'transactions'?: (_geyser_SubscribeUpdateTransactionInfo__Output)[];
  'parentSlot'?: (string);
  'parentBlockhash'?: (string);
  'executedTransactionCount'?: (string);
  'updatedAccountCount'?: (string);
  'accounts'?: (_geyser_SubscribeUpdateAccountInfo__Output)[];
  'entriesCount'?: (string);
  'entries'?: (_geyser_SubscribeUpdateEntry__Output)[];
}
