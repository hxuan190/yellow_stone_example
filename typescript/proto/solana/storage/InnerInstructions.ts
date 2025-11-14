// Original file: proto/solana-storage.proto

import type { InnerInstruction as _solana_storage_InnerInstruction, InnerInstruction__Output as _solana_storage_InnerInstruction__Output } from '../../solana/storage/InnerInstruction';

export interface InnerInstructions {
  'index'?: (number);
  'instructions'?: (_solana_storage_InnerInstruction)[];
}

export interface InnerInstructions__Output {
  'index'?: (number);
  'instructions'?: (_solana_storage_InnerInstruction__Output)[];
}
