// Original file: proto/geyser.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { GetBlockHeightRequest as _geyser_GetBlockHeightRequest, GetBlockHeightRequest__Output as _geyser_GetBlockHeightRequest__Output } from '../geyser/GetBlockHeightRequest';
import type { GetBlockHeightResponse as _geyser_GetBlockHeightResponse, GetBlockHeightResponse__Output as _geyser_GetBlockHeightResponse__Output } from '../geyser/GetBlockHeightResponse';
import type { GetLatestBlockhashRequest as _geyser_GetLatestBlockhashRequest, GetLatestBlockhashRequest__Output as _geyser_GetLatestBlockhashRequest__Output } from '../geyser/GetLatestBlockhashRequest';
import type { GetLatestBlockhashResponse as _geyser_GetLatestBlockhashResponse, GetLatestBlockhashResponse__Output as _geyser_GetLatestBlockhashResponse__Output } from '../geyser/GetLatestBlockhashResponse';
import type { GetSlotRequest as _geyser_GetSlotRequest, GetSlotRequest__Output as _geyser_GetSlotRequest__Output } from '../geyser/GetSlotRequest';
import type { GetSlotResponse as _geyser_GetSlotResponse, GetSlotResponse__Output as _geyser_GetSlotResponse__Output } from '../geyser/GetSlotResponse';
import type { GetVersionRequest as _geyser_GetVersionRequest, GetVersionRequest__Output as _geyser_GetVersionRequest__Output } from '../geyser/GetVersionRequest';
import type { GetVersionResponse as _geyser_GetVersionResponse, GetVersionResponse__Output as _geyser_GetVersionResponse__Output } from '../geyser/GetVersionResponse';
import type { IsBlockhashValidRequest as _geyser_IsBlockhashValidRequest, IsBlockhashValidRequest__Output as _geyser_IsBlockhashValidRequest__Output } from '../geyser/IsBlockhashValidRequest';
import type { IsBlockhashValidResponse as _geyser_IsBlockhashValidResponse, IsBlockhashValidResponse__Output as _geyser_IsBlockhashValidResponse__Output } from '../geyser/IsBlockhashValidResponse';
import type { PingRequest as _geyser_PingRequest, PingRequest__Output as _geyser_PingRequest__Output } from '../geyser/PingRequest';
import type { PongResponse as _geyser_PongResponse, PongResponse__Output as _geyser_PongResponse__Output } from '../geyser/PongResponse';
import type { SubscribeRequest as _geyser_SubscribeRequest, SubscribeRequest__Output as _geyser_SubscribeRequest__Output } from '../geyser/SubscribeRequest';
import type { SubscribeUpdate as _geyser_SubscribeUpdate, SubscribeUpdate__Output as _geyser_SubscribeUpdate__Output } from '../geyser/SubscribeUpdate';

export interface GeyserClient extends grpc.Client {
  GetBlockHeight(argument: _geyser_GetBlockHeightRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_geyser_GetBlockHeightResponse__Output>): grpc.ClientUnaryCall;
  GetBlockHeight(argument: _geyser_GetBlockHeightRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_geyser_GetBlockHeightResponse__Output>): grpc.ClientUnaryCall;
  GetBlockHeight(argument: _geyser_GetBlockHeightRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_geyser_GetBlockHeightResponse__Output>): grpc.ClientUnaryCall;
  GetBlockHeight(argument: _geyser_GetBlockHeightRequest, callback: grpc.requestCallback<_geyser_GetBlockHeightResponse__Output>): grpc.ClientUnaryCall;
  getBlockHeight(argument: _geyser_GetBlockHeightRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_geyser_GetBlockHeightResponse__Output>): grpc.ClientUnaryCall;
  getBlockHeight(argument: _geyser_GetBlockHeightRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_geyser_GetBlockHeightResponse__Output>): grpc.ClientUnaryCall;
  getBlockHeight(argument: _geyser_GetBlockHeightRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_geyser_GetBlockHeightResponse__Output>): grpc.ClientUnaryCall;
  getBlockHeight(argument: _geyser_GetBlockHeightRequest, callback: grpc.requestCallback<_geyser_GetBlockHeightResponse__Output>): grpc.ClientUnaryCall;
  
  GetLatestBlockhash(argument: _geyser_GetLatestBlockhashRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_geyser_GetLatestBlockhashResponse__Output>): grpc.ClientUnaryCall;
  GetLatestBlockhash(argument: _geyser_GetLatestBlockhashRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_geyser_GetLatestBlockhashResponse__Output>): grpc.ClientUnaryCall;
  GetLatestBlockhash(argument: _geyser_GetLatestBlockhashRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_geyser_GetLatestBlockhashResponse__Output>): grpc.ClientUnaryCall;
  GetLatestBlockhash(argument: _geyser_GetLatestBlockhashRequest, callback: grpc.requestCallback<_geyser_GetLatestBlockhashResponse__Output>): grpc.ClientUnaryCall;
  getLatestBlockhash(argument: _geyser_GetLatestBlockhashRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_geyser_GetLatestBlockhashResponse__Output>): grpc.ClientUnaryCall;
  getLatestBlockhash(argument: _geyser_GetLatestBlockhashRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_geyser_GetLatestBlockhashResponse__Output>): grpc.ClientUnaryCall;
  getLatestBlockhash(argument: _geyser_GetLatestBlockhashRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_geyser_GetLatestBlockhashResponse__Output>): grpc.ClientUnaryCall;
  getLatestBlockhash(argument: _geyser_GetLatestBlockhashRequest, callback: grpc.requestCallback<_geyser_GetLatestBlockhashResponse__Output>): grpc.ClientUnaryCall;
  
  GetSlot(argument: _geyser_GetSlotRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_geyser_GetSlotResponse__Output>): grpc.ClientUnaryCall;
  GetSlot(argument: _geyser_GetSlotRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_geyser_GetSlotResponse__Output>): grpc.ClientUnaryCall;
  GetSlot(argument: _geyser_GetSlotRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_geyser_GetSlotResponse__Output>): grpc.ClientUnaryCall;
  GetSlot(argument: _geyser_GetSlotRequest, callback: grpc.requestCallback<_geyser_GetSlotResponse__Output>): grpc.ClientUnaryCall;
  getSlot(argument: _geyser_GetSlotRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_geyser_GetSlotResponse__Output>): grpc.ClientUnaryCall;
  getSlot(argument: _geyser_GetSlotRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_geyser_GetSlotResponse__Output>): grpc.ClientUnaryCall;
  getSlot(argument: _geyser_GetSlotRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_geyser_GetSlotResponse__Output>): grpc.ClientUnaryCall;
  getSlot(argument: _geyser_GetSlotRequest, callback: grpc.requestCallback<_geyser_GetSlotResponse__Output>): grpc.ClientUnaryCall;
  
  GetVersion(argument: _geyser_GetVersionRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_geyser_GetVersionResponse__Output>): grpc.ClientUnaryCall;
  GetVersion(argument: _geyser_GetVersionRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_geyser_GetVersionResponse__Output>): grpc.ClientUnaryCall;
  GetVersion(argument: _geyser_GetVersionRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_geyser_GetVersionResponse__Output>): grpc.ClientUnaryCall;
  GetVersion(argument: _geyser_GetVersionRequest, callback: grpc.requestCallback<_geyser_GetVersionResponse__Output>): grpc.ClientUnaryCall;
  getVersion(argument: _geyser_GetVersionRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_geyser_GetVersionResponse__Output>): grpc.ClientUnaryCall;
  getVersion(argument: _geyser_GetVersionRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_geyser_GetVersionResponse__Output>): grpc.ClientUnaryCall;
  getVersion(argument: _geyser_GetVersionRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_geyser_GetVersionResponse__Output>): grpc.ClientUnaryCall;
  getVersion(argument: _geyser_GetVersionRequest, callback: grpc.requestCallback<_geyser_GetVersionResponse__Output>): grpc.ClientUnaryCall;
  
  IsBlockhashValid(argument: _geyser_IsBlockhashValidRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_geyser_IsBlockhashValidResponse__Output>): grpc.ClientUnaryCall;
  IsBlockhashValid(argument: _geyser_IsBlockhashValidRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_geyser_IsBlockhashValidResponse__Output>): grpc.ClientUnaryCall;
  IsBlockhashValid(argument: _geyser_IsBlockhashValidRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_geyser_IsBlockhashValidResponse__Output>): grpc.ClientUnaryCall;
  IsBlockhashValid(argument: _geyser_IsBlockhashValidRequest, callback: grpc.requestCallback<_geyser_IsBlockhashValidResponse__Output>): grpc.ClientUnaryCall;
  isBlockhashValid(argument: _geyser_IsBlockhashValidRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_geyser_IsBlockhashValidResponse__Output>): grpc.ClientUnaryCall;
  isBlockhashValid(argument: _geyser_IsBlockhashValidRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_geyser_IsBlockhashValidResponse__Output>): grpc.ClientUnaryCall;
  isBlockhashValid(argument: _geyser_IsBlockhashValidRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_geyser_IsBlockhashValidResponse__Output>): grpc.ClientUnaryCall;
  isBlockhashValid(argument: _geyser_IsBlockhashValidRequest, callback: grpc.requestCallback<_geyser_IsBlockhashValidResponse__Output>): grpc.ClientUnaryCall;
  
  Ping(argument: _geyser_PingRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_geyser_PongResponse__Output>): grpc.ClientUnaryCall;
  Ping(argument: _geyser_PingRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_geyser_PongResponse__Output>): grpc.ClientUnaryCall;
  Ping(argument: _geyser_PingRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_geyser_PongResponse__Output>): grpc.ClientUnaryCall;
  Ping(argument: _geyser_PingRequest, callback: grpc.requestCallback<_geyser_PongResponse__Output>): grpc.ClientUnaryCall;
  ping(argument: _geyser_PingRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_geyser_PongResponse__Output>): grpc.ClientUnaryCall;
  ping(argument: _geyser_PingRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_geyser_PongResponse__Output>): grpc.ClientUnaryCall;
  ping(argument: _geyser_PingRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_geyser_PongResponse__Output>): grpc.ClientUnaryCall;
  ping(argument: _geyser_PingRequest, callback: grpc.requestCallback<_geyser_PongResponse__Output>): grpc.ClientUnaryCall;
  
  Subscribe(metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientDuplexStream<_geyser_SubscribeRequest, _geyser_SubscribeUpdate__Output>;
  Subscribe(options?: grpc.CallOptions): grpc.ClientDuplexStream<_geyser_SubscribeRequest, _geyser_SubscribeUpdate__Output>;
  subscribe(metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientDuplexStream<_geyser_SubscribeRequest, _geyser_SubscribeUpdate__Output>;
  subscribe(options?: grpc.CallOptions): grpc.ClientDuplexStream<_geyser_SubscribeRequest, _geyser_SubscribeUpdate__Output>;
  
}

export interface GeyserHandlers extends grpc.UntypedServiceImplementation {
  GetBlockHeight: grpc.handleUnaryCall<_geyser_GetBlockHeightRequest__Output, _geyser_GetBlockHeightResponse>;
  
  GetLatestBlockhash: grpc.handleUnaryCall<_geyser_GetLatestBlockhashRequest__Output, _geyser_GetLatestBlockhashResponse>;
  
  GetSlot: grpc.handleUnaryCall<_geyser_GetSlotRequest__Output, _geyser_GetSlotResponse>;
  
  GetVersion: grpc.handleUnaryCall<_geyser_GetVersionRequest__Output, _geyser_GetVersionResponse>;
  
  IsBlockhashValid: grpc.handleUnaryCall<_geyser_IsBlockhashValidRequest__Output, _geyser_IsBlockhashValidResponse>;
  
  Ping: grpc.handleUnaryCall<_geyser_PingRequest__Output, _geyser_PongResponse>;
  
  Subscribe: grpc.handleBidiStreamingCall<_geyser_SubscribeRequest__Output, _geyser_SubscribeUpdate>;
  
}

export interface GeyserDefinition extends grpc.ServiceDefinition {
  GetBlockHeight: MethodDefinition<_geyser_GetBlockHeightRequest, _geyser_GetBlockHeightResponse, _geyser_GetBlockHeightRequest__Output, _geyser_GetBlockHeightResponse__Output>
  GetLatestBlockhash: MethodDefinition<_geyser_GetLatestBlockhashRequest, _geyser_GetLatestBlockhashResponse, _geyser_GetLatestBlockhashRequest__Output, _geyser_GetLatestBlockhashResponse__Output>
  GetSlot: MethodDefinition<_geyser_GetSlotRequest, _geyser_GetSlotResponse, _geyser_GetSlotRequest__Output, _geyser_GetSlotResponse__Output>
  GetVersion: MethodDefinition<_geyser_GetVersionRequest, _geyser_GetVersionResponse, _geyser_GetVersionRequest__Output, _geyser_GetVersionResponse__Output>
  IsBlockhashValid: MethodDefinition<_geyser_IsBlockhashValidRequest, _geyser_IsBlockhashValidResponse, _geyser_IsBlockhashValidRequest__Output, _geyser_IsBlockhashValidResponse__Output>
  Ping: MethodDefinition<_geyser_PingRequest, _geyser_PongResponse, _geyser_PingRequest__Output, _geyser_PongResponse__Output>
  Subscribe: MethodDefinition<_geyser_SubscribeRequest, _geyser_SubscribeUpdate, _geyser_SubscribeRequest__Output, _geyser_SubscribeUpdate__Output>
}
