import type * as grpc from '@grpc/grpc-js';
import type { EnumTypeDefinition, MessageTypeDefinition } from '@grpc/proto-loader';


type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
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

