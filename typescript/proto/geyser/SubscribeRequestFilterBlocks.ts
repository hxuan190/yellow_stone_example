// Original file: proto/geyser.proto


export interface SubscribeRequestFilterBlocks {
  'accountInclude'?: (string)[];
  'includeTransactions'?: (boolean);
  'includeAccounts'?: (boolean);
  'includeEntries'?: (boolean);
  '_includeTransactions'?: "includeTransactions";
  '_includeAccounts'?: "includeAccounts";
  '_includeEntries'?: "includeEntries";
}

export interface SubscribeRequestFilterBlocks__Output {
  'accountInclude'?: (string)[];
  'includeTransactions'?: (boolean);
  'includeAccounts'?: (boolean);
  'includeEntries'?: (boolean);
}
