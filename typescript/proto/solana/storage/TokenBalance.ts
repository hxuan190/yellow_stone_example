// Original file: proto/solana-storage.proto

import type { UiTokenAmount as _solana_storage_UiTokenAmount, UiTokenAmount__Output as _solana_storage_UiTokenAmount__Output } from '../../solana/storage/UiTokenAmount';

export interface TokenBalance {
  'accountIndex'?: (number);
  'mint'?: (string);
  'uiTokenAmount'?: (_solana_storage_UiTokenAmount | null);
  'owner'?: (string);
  'programId'?: (string);
}

export interface TokenBalance__Output {
  'accountIndex'?: (number);
  'mint'?: (string);
  'uiTokenAmount'?: (_solana_storage_UiTokenAmount__Output);
  'owner'?: (string);
  'programId'?: (string);
}
