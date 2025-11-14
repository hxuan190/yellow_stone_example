// Original file: proto/solana-storage.proto

import type { MessageHeader as _solana_storage_MessageHeader, MessageHeader__Output as _solana_storage_MessageHeader__Output } from '../../solana/storage/MessageHeader';
import type { CompiledInstruction as _solana_storage_CompiledInstruction, CompiledInstruction__Output as _solana_storage_CompiledInstruction__Output } from '../../solana/storage/CompiledInstruction';
import type { MessageAddressTableLookup as _solana_storage_MessageAddressTableLookup, MessageAddressTableLookup__Output as _solana_storage_MessageAddressTableLookup__Output } from '../../solana/storage/MessageAddressTableLookup';

export interface Message {
  'header'?: (_solana_storage_MessageHeader | null);
  'accountKeys'?: (Buffer | Uint8Array | string)[];
  'recentBlockhash'?: (Buffer | Uint8Array | string);
  'instructions'?: (_solana_storage_CompiledInstruction)[];
  'versioned'?: (boolean);
  'addressTableLookups'?: (_solana_storage_MessageAddressTableLookup)[];
}

export interface Message__Output {
  'header'?: (_solana_storage_MessageHeader__Output);
  'accountKeys'?: (Buffer)[];
  'recentBlockhash'?: (Buffer);
  'instructions'?: (_solana_storage_CompiledInstruction__Output)[];
  'versioned'?: (boolean);
  'addressTableLookups'?: (_solana_storage_MessageAddressTableLookup__Output)[];
}
