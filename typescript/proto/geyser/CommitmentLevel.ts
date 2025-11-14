// Original file: proto/geyser.proto

export const CommitmentLevel = {
  PROCESSED: 'PROCESSED',
  CONFIRMED: 'CONFIRMED',
  FINALIZED: 'FINALIZED',
} as const;

export type CommitmentLevel =
  | 'PROCESSED'
  | 0
  | 'CONFIRMED'
  | 1
  | 'FINALIZED'
  | 2

export type CommitmentLevel__Output = typeof CommitmentLevel[keyof typeof CommitmentLevel]
