// Original file: proto/solana-storage.proto


export interface MessageAddressTableLookup {
  'accountKey'?: (Buffer | Uint8Array | string);
  'writableIndexes'?: (Buffer | Uint8Array | string);
  'readonlyIndexes'?: (Buffer | Uint8Array | string);
}

export interface MessageAddressTableLookup__Output {
  'accountKey'?: (Buffer);
  'writableIndexes'?: (Buffer);
  'readonlyIndexes'?: (Buffer);
}
