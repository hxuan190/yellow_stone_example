import type * as grpc from '@grpc/grpc-js';
import type { EnumTypeDefinition, MessageTypeDefinition } from '@grpc/proto-loader';

import type { GeyserClient as _geyser_GeyserClient, GeyserDefinition as _geyser_GeyserDefinition } from './geyser/Geyser';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  geyser: {
    CommitmentLevel: EnumTypeDefinition
    GetBlockHeightRequest: MessageTypeDefinition
    GetBlockHeightResponse: MessageTypeDefinition
    GetLatestBlockhashRequest: MessageTypeDefinition
    GetLatestBlockhashResponse: MessageTypeDefinition
    GetSlotRequest: MessageTypeDefinition
    GetSlotResponse: MessageTypeDefinition
    GetVersionRequest: MessageTypeDefinition
    GetVersionResponse: MessageTypeDefinition
    Geyser: SubtypeConstructor<typeof grpc.Client, _geyser_GeyserClient> & { service: _geyser_GeyserDefinition }
    IsBlockhashValidRequest: MessageTypeDefinition
    IsBlockhashValidResponse: MessageTypeDefinition
    PingRequest: MessageTypeDefinition
    PongResponse: MessageTypeDefinition
    SubscribeRequest: MessageTypeDefinition
    SubscribeRequestAccountsDataSlice: MessageTypeDefinition
    SubscribeRequestFilterAccounts: MessageTypeDefinition
    SubscribeRequestFilterAccountsFilter: MessageTypeDefinition
    SubscribeRequestFilterAccountsFilterMemcmp: MessageTypeDefinition
    SubscribeRequestFilterBlocks: MessageTypeDefinition
    SubscribeRequestFilterBlocksMeta: MessageTypeDefinition
    SubscribeRequestFilterEntry: MessageTypeDefinition
    SubscribeRequestFilterSlots: MessageTypeDefinition
    SubscribeRequestFilterTransactions: MessageTypeDefinition
    SubscribeRequestPing: MessageTypeDefinition
    SubscribeUpdate: MessageTypeDefinition
    SubscribeUpdateAccount: MessageTypeDefinition
    SubscribeUpdateAccountInfo: MessageTypeDefinition
    SubscribeUpdateBlock: MessageTypeDefinition
    SubscribeUpdateBlockMeta: MessageTypeDefinition
    SubscribeUpdateEntry: MessageTypeDefinition
    SubscribeUpdatePing: MessageTypeDefinition
    SubscribeUpdatePong: MessageTypeDefinition
    SubscribeUpdateSlot: MessageTypeDefinition
    SubscribeUpdateTransaction: MessageTypeDefinition
    SubscribeUpdateTransactionInfo: MessageTypeDefinition
  }
  solana: {
    storage: {
      CompiledInstruction: MessageTypeDefinition
      ConfirmedBlock: MessageTypeDefinition
      InnerInstruction: MessageTypeDefinition
      InnerInstructions: MessageTypeDefinition
      Message: MessageTypeDefinition
      MessageAddressTableLookup: MessageTypeDefinition
      MessageHeader: MessageTypeDefinition
      ReturnData: MessageTypeDefinition
      Reward: MessageTypeDefinition
      RewardType: EnumTypeDefinition
      TokenBalance: MessageTypeDefinition
      TransactionError: MessageTypeDefinition
      UiTokenAmount: MessageTypeDefinition
    }
  }
}

