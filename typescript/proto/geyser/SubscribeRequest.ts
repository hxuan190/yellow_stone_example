// Original file: proto/geyser.proto

import type { SubscribeRequestFilterAccounts as _geyser_SubscribeRequestFilterAccounts, SubscribeRequestFilterAccounts__Output as _geyser_SubscribeRequestFilterAccounts__Output } from '../geyser/SubscribeRequestFilterAccounts';
import type { SubscribeRequestFilterSlots as _geyser_SubscribeRequestFilterSlots, SubscribeRequestFilterSlots__Output as _geyser_SubscribeRequestFilterSlots__Output } from '../geyser/SubscribeRequestFilterSlots';
import type { SubscribeRequestFilterTransactions as _geyser_SubscribeRequestFilterTransactions, SubscribeRequestFilterTransactions__Output as _geyser_SubscribeRequestFilterTransactions__Output } from '../geyser/SubscribeRequestFilterTransactions';
import type { SubscribeRequestFilterBlocks as _geyser_SubscribeRequestFilterBlocks, SubscribeRequestFilterBlocks__Output as _geyser_SubscribeRequestFilterBlocks__Output } from '../geyser/SubscribeRequestFilterBlocks';
import type { SubscribeRequestFilterBlocksMeta as _geyser_SubscribeRequestFilterBlocksMeta, SubscribeRequestFilterBlocksMeta__Output as _geyser_SubscribeRequestFilterBlocksMeta__Output } from '../geyser/SubscribeRequestFilterBlocksMeta';
import type { CommitmentLevel as _geyser_CommitmentLevel, CommitmentLevel__Output as _geyser_CommitmentLevel__Output } from '../geyser/CommitmentLevel';
import type { SubscribeRequestAccountsDataSlice as _geyser_SubscribeRequestAccountsDataSlice, SubscribeRequestAccountsDataSlice__Output as _geyser_SubscribeRequestAccountsDataSlice__Output } from '../geyser/SubscribeRequestAccountsDataSlice';
import type { SubscribeRequestFilterEntry as _geyser_SubscribeRequestFilterEntry, SubscribeRequestFilterEntry__Output as _geyser_SubscribeRequestFilterEntry__Output } from '../geyser/SubscribeRequestFilterEntry';
import type { SubscribeRequestPing as _geyser_SubscribeRequestPing, SubscribeRequestPing__Output as _geyser_SubscribeRequestPing__Output } from '../geyser/SubscribeRequestPing';

export interface SubscribeRequest {
  'accounts'?: ({[key: string]: _geyser_SubscribeRequestFilterAccounts});
  'slots'?: ({[key: string]: _geyser_SubscribeRequestFilterSlots});
  'transactions'?: ({[key: string]: _geyser_SubscribeRequestFilterTransactions});
  'blocks'?: ({[key: string]: _geyser_SubscribeRequestFilterBlocks});
  'blocksMeta'?: ({[key: string]: _geyser_SubscribeRequestFilterBlocksMeta});
  'commitment'?: (_geyser_CommitmentLevel);
  'accountsDataSlice'?: (_geyser_SubscribeRequestAccountsDataSlice)[];
  'entry'?: ({[key: string]: _geyser_SubscribeRequestFilterEntry});
  'ping'?: (_geyser_SubscribeRequestPing | null);
  '_commitment'?: "commitment";
  '_ping'?: "ping";
}

export interface SubscribeRequest__Output {
  'accounts'?: ({[key: string]: _geyser_SubscribeRequestFilterAccounts__Output});
  'slots'?: ({[key: string]: _geyser_SubscribeRequestFilterSlots__Output});
  'transactions'?: ({[key: string]: _geyser_SubscribeRequestFilterTransactions__Output});
  'blocks'?: ({[key: string]: _geyser_SubscribeRequestFilterBlocks__Output});
  'blocksMeta'?: ({[key: string]: _geyser_SubscribeRequestFilterBlocksMeta__Output});
  'commitment'?: (_geyser_CommitmentLevel__Output);
  'accountsDataSlice'?: (_geyser_SubscribeRequestAccountsDataSlice__Output)[];
  'entry'?: ({[key: string]: _geyser_SubscribeRequestFilterEntry__Output});
  'ping'?: (_geyser_SubscribeRequestPing__Output);
}
