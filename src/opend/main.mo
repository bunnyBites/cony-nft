import Principal "mo:base/Principal";
import Debug "mo:base/Debug";
import Cycles "mo:base/ExperimentalCycles";
import NFTActor "../NFT/nft";

actor OpenD {
  public shared (msg) func mint(name : Text, images : [Nat8]) : async Principal {
    let owner: Principal = msg.caller;

    Cycles.add(100_500_000_000);
    let newNft = await NFTActor.NFT(name, owner, images);

    let nftCanisterId = await newNft.getCanisterId();

    return nftCanisterId;
  };
};
