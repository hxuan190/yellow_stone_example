// Original file: proto/geyser.proto

import type { SubscribeUpdateAccount as _geyser_SubscribeUpdateAccount, SubscribeUpdateAccount__Output as _geyser_SubscribeUpdateAccount__Output } from '../geyser/SubscribeUpdateAccount';
import type { SubscribeUpdateSlot as _geyser_SubscribeUpdateSlot, SubscribeUpdateSlot__Output as _geyser_SubscribeUpdateSlot__Output } from '../geyser/SubscribeUpdateSlot';
import type { SubscribeUpdateTransaction as _geyser_SubscribeUpdateTransaction, SubscribeUpdateTransaction__Output as _geyser_SubscribeUpdateTransaction__Output } from '../geyser/SubscribeUpdateTransaction';
import type { SubscribeUpdateBlock as _geyser_SubscribeUpdateBlock, SubscribeUpdateBlock__Output as _geyser_SubscribeUpdateBlock__Output } from '../geyser/SubscribeUpdateBlock';
import type { SubscribeUpdatePing as _geyser_SubscribeUpdatePing, SubscribeUpdatePing__Output as _geyser_SubscribeUpdatePing__Output } from '../geyser/SubscribeUpdatePing';
import type { SubscribeUpdateBlockMeta as _geyser_SubscribeUpdateBlockMeta, SubscribeUpdateBlockMeta__Output as _geyser_SubscribeUpdateBlockMeta__Output } from '../geyser/SubscribeUpdateBlockMeta';
import type { SubscribeUpdateEntry as _geyser_SubscribeUpdateEntry, SubscribeUpdateEntry__Output as _geyser_SubscribeUpdateEntry__Output } from '../geyser/SubscribeUpdateEntry';
import type { SubscribeUpdatePong as _geyser_SubscribeUpdatePong, SubscribeUpdatePong__Output as _geyser_SubscribeUpdatePong__Output } from '../geyser/SubscribeUpdatePong';

export interface SubscribeUpdate {
  'filters'?: (string)[];
  'account'?: (_geyser_SubscribeUpdateAccount | null);
  'slot'?: (_geyser_SubscribeUpdateSlot | null);
  'transaction'?: (_geyser_SubscribeUpdateTransaction | null);
  'block'?: (_geyser_SubscribeUpdateBlock | null);
  'ping'?: (_geyser_SubscribeUpdatePing | null);
  'blockMeta'?: (_geyser_SubscribeUpdateBlockMeta | null);
  'entry'?: (_geyser_SubscribeUpdateEntry | null);
  'pong'?: (_geyser_SubscribeUpdatePong | null);
  'updateOneof'?: "account"|"slot"|"transaction"|"block"|"ping"|"pong"|"blockMeta"|"entry";
}

export interface SubscribeUpdate__Output {
  'filters'?: (string)[];
  'account'?: (_geyser_SubscribeUpdateAccount__Output);
  'slot'?: (_geyser_SubscribeUpdateSlot__Output);
  'transaction'?: (_geyser_SubscribeUpdateTransaction__Output);
  'block'?: (_geyser_SubscribeUpdateBlock__Output);
  'ping'?: (_geyser_SubscribeUpdatePing__Output);
  'blockMeta'?: (_geyser_SubscribeUpdateBlockMeta__Output);
  'entry'?: (_geyser_SubscribeUpdateEntry__Output);
  'pong'?: (_geyser_SubscribeUpdatePong__Output);
}
