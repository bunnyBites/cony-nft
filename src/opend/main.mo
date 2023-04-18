import Principal "mo:base/Principal";
import Debug "mo:base/Debug";

actor OpenD {
  public shared (msg) func createNFT(name : Text, images : [Nat8]) : async Principal {
    Debug.print(name);

    return msg.caller;
  };
};
