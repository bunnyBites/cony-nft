import Debug "mo:base/Debug";
import Principal "mo:base/Principal";

actor class NFT(name : Text, owner : Principal, images : [Nat8]) = this {
  public query func getItemName() : async Text { return name };

  public query func getOwner() : async Principal { return owner };

  public query func getImages() : async [Nat8] { return images };

  public query func getCanisterId(): async Principal {
    return Principal.fromActor(this);
  }
};
