// Original file: proto/geyser.proto

import type { CommitmentLevel as _geyser_CommitmentLevel, CommitmentLevel__Output as _geyser_CommitmentLevel__Output } from '../geyser/CommitmentLevel';

export interface GetBlockHeightRequest {
  'commitment'?: (_geyser_CommitmentLevel);
  '_commitment'?: "commitment";
}

export interface GetBlockHeightRequest__Output {
  'commitment'?: (_geyser_CommitmentLevel__Output);
}
