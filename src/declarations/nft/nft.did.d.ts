import type { Principal } from '@dfinity/principal';
export interface NFT {
  'getImages' : () => Promise<Array<number>>,
  'getItemName' : () => Promise<string>,
  'getOwner' : () => Promise<Principal>,
}
export interface _SERVICE extends NFT {}
