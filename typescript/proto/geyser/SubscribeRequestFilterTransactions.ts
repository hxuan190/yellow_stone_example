// Original file: proto/geyser.proto


export interface SubscribeRequestFilterTransactions {
  'vote'?: (boolean);
  'failed'?: (boolean);
  'accountInclude'?: (string)[];
  'accountExclude'?: (string)[];
  'signature'?: (string);
  'accountRequired'?: (string)[];
  '_vote'?: "vote";
  '_failed'?: "failed";
  '_signature'?: "signature";
}

export interface SubscribeRequestFilterTransactions__Output {
  'vote'?: (boolean);
  'failed'?: (boolean);
  'accountInclude'?: (string)[];
  'accountExclude'?: (string)[];
  'signature'?: (string);
  'accountRequired'?: (string)[];
}
