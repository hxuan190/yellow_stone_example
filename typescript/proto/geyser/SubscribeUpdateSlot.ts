// Original file: proto/geyser.proto

import type { CommitmentLevel as _geyser_CommitmentLevel, CommitmentLevel__Output as _geyser_CommitmentLevel__Output } from '../geyser/CommitmentLevel';
import type { Long } from '@grpc/proto-loader';

export interface SubscribeUpdateSlot {
  'slot'?: (number | string | Long);
  'parent'?: (number | string | Long);
  'status'?: (_geyser_CommitmentLevel);
  '_parent'?: "parent";
}

export interface SubscribeUpdateSlot__Output {
  'slot'?: (string);
  'parent'?: (string);
  'status'?: (_geyser_CommitmentLevel__Output);
}
