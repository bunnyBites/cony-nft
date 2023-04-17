export const idlFactory = ({ IDL }) => {
  const NFT = IDL.Service({
    'getImages' : IDL.Func([], [IDL.Vec(IDL.Nat8)], ['query']),
    'getItemName' : IDL.Func([], [IDL.Text], ['query']),
    'getOwner' : IDL.Func([], [IDL.Principal], ['query']),
  });
  return NFT;
};
export const init = ({ IDL }) => {
  return [IDL.Text, IDL.Principal, IDL.Vec(IDL.Nat8)];
};
