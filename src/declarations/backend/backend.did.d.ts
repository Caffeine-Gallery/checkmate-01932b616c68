import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface _SERVICE {
  'addItem' : ActorMethod<[string], undefined>,
  'deleteItem' : ActorMethod<[bigint], undefined>,
  'getItems' : ActorMethod<[], Array<[bigint, string, boolean]>>,
  'toggleItem' : ActorMethod<[bigint], undefined>,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
