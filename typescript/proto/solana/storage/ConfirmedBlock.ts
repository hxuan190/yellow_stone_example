// Original file: proto/solana-storage.proto

import type { Message as _solana_storage_Message, Message__Output as _solana_storage_Message__Output } from '../../solana/storage/Message';
import type { TransactionError as _solana_storage_TransactionError, TransactionError__Output as _solana_storage_TransactionError__Output } from '../../solana/storage/TransactionError';
import type { InnerInstructions as _solana_storage_InnerInstructions, InnerInstructions__Output as _solana_storage_InnerInstructions__Output } from '../../solana/storage/InnerInstructions';
import type { TokenBalance as _solana_storage_TokenBalance, TokenBalance__Output as _solana_storage_TokenBalance__Output } from '../../solana/storage/TokenBalance';
import type { Reward as _solana_storage_Reward, Reward__Output as _solana_storage_Reward__Output } from '../../solana/storage/Reward';
import type { ReturnData as _solana_storage_ReturnData, ReturnData__Output as _solana_storage_ReturnData__Output } from '../../solana/storage/ReturnData';
import type { Long } from '@grpc/proto-loader';

export interface _solana_storage_ConfirmedBlock_BlockHeight {
  'blockHeight'?: (number | string | Long);
}

export interface _solana_storage_ConfirmedBlock_BlockHeight__Output {
  'blockHeight'?: (string);
}

export interface _solana_storage_ConfirmedBlock_Rewards {
  'rewards'?: (_solana_storage_Reward)[];
}

export interface _solana_storage_ConfirmedBlock_Rewards__Output {
  'rewards'?: (_solana_storage_Reward__Output)[];
}

export interface _solana_storage_ConfirmedBlock_Transaction {
  'signatures'?: (Buffer | Uint8Array | string)[];
  'message'?: (_solana_storage_Message | null);
}

export interface _solana_storage_ConfirmedBlock_Transaction__Output {
  'signatures'?: (Buffer)[];
  'message'?: (_solana_storage_Message__Output);
}

export interface _solana_storage_ConfirmedBlock_TransactionStatusMeta {
  'err'?: (_solana_storage_TransactionError | null);
  'fee'?: (number | string | Long);
  'preBalances'?: (number | string | Long)[];
  'postBalances'?: (number | string | Long)[];
  'innerInstructions'?: (_solana_storage_InnerInstructions)[];
  'innerInstructionsNone'?: (boolean);
  'logMessages'?: (string)[];
  'logMessagesNone'?: (boolean);
  'preTokenBalances'?: (_solana_storage_TokenBalance)[];
  'postTokenBalances'?: (_solana_storage_TokenBalance)[];
  'rewards'?: (_solana_storage_Reward)[];
  'loadedWritableAddresses'?: (Buffer | Uint8Array | string)[];
  'loadedReadonlyAddresses'?: (Buffer | Uint8Array | string)[];
  'returnData'?: (_solana_storage_ReturnData | null);
  'returnDataNone'?: (boolean);
  'computeUnitsConsumed'?: (number | string | Long);
  '_computeUnitsConsumed'?: "computeUnitsConsumed";
}

export interface _solana_storage_ConfirmedBlock_TransactionStatusMeta__Output {
  'err'?: (_solana_storage_TransactionError__Output);
  'fee'?: (string);
  'preBalances'?: (string)[];
  'postBalances'?: (string)[];
  'innerInstructions'?: (_solana_storage_InnerInstructions__Output)[];
  'innerInstructionsNone'?: (boolean);
  'logMessages'?: (string)[];
  'logMessagesNone'?: (boolean);
  'preTokenBalances'?: (_solana_storage_TokenBalance__Output)[];
  'postTokenBalances'?: (_solana_storage_TokenBalance__Output)[];
  'rewards'?: (_solana_storage_Reward__Output)[];
  'loadedWritableAddresses'?: (Buffer)[];
  'loadedReadonlyAddresses'?: (Buffer)[];
  'returnData'?: (_solana_storage_ReturnData__Output);
  'returnDataNone'?: (boolean);
  'computeUnitsConsumed'?: (string);
}

export interface _solana_storage_ConfirmedBlock_UnixTimestamp {
  'timestamp'?: (number | string | Long);
}

export interface _solana_storage_ConfirmedBlock_UnixTimestamp__Output {
  'timestamp'?: (string);
}

export interface ConfirmedBlock {
  'previousBlockhash'?: (string);
  'blockhash'?: (string);
  'parentSlot'?: (number | string | Long);
  'transactions'?: (_solana_storage_ConfirmedBlock_Transaction)[];
  'rewards'?: (_solana_storage_ConfirmedBlock_Rewards | null);
  'blockTime'?: (_solana_storage_ConfirmedBlock_UnixTimestamp | null);
  'blockHeight'?: (_solana_storage_ConfirmedBlock_BlockHeight | null);
}

export interface ConfirmedBlock__Output {
  'previousBlockhash'?: (string);
  'blockhash'?: (string);
  'parentSlot'?: (string);
  'transactions'?: (_solana_storage_ConfirmedBlock_Transaction__Output)[];
  'rewards'?: (_solana_storage_ConfirmedBlock_Rewards__Output);
  'blockTime'?: (_solana_storage_ConfirmedBlock_UnixTimestamp__Output);
  'blockHeight'?: (_solana_storage_ConfirmedBlock_BlockHeight__Output);
}
