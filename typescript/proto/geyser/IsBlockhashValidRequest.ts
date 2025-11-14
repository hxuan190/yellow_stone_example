// Original file: proto/geyser.proto

import type { CommitmentLevel as _geyser_CommitmentLevel, CommitmentLevel__Output as _geyser_CommitmentLevel__Output } from '../geyser/CommitmentLevel';

export interface IsBlockhashValidRequest {
  'blockhash'?: (string);
  'commitment'?: (_geyser_CommitmentLevel);
  '_commitment'?: "commitment";
}

export interface IsBlockhashValidRequest__Output {
  'blockhash'?: (string);
  'commitment'?: (_geyser_CommitmentLevel__Output);
}
