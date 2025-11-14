// Original file: proto/solana-storage.proto

import type { RewardType as _solana_storage_RewardType, RewardType__Output as _solana_storage_RewardType__Output } from '../../solana/storage/RewardType';
import type { Long } from '@grpc/proto-loader';

export interface Reward {
  'pubkey'?: (string);
  'lamports'?: (number | string | Long);
  'postBalance'?: (number | string | Long);
  'rewardType'?: (_solana_storage_RewardType);
  'commission'?: (string);
}

export interface Reward__Output {
  'pubkey'?: (string);
  'lamports'?: (string);
  'postBalance'?: (string);
  'rewardType'?: (_solana_storage_RewardType__Output);
  'commission'?: (string);
}
