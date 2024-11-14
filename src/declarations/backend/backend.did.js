export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'addItem' : IDL.Func([IDL.Text], [], []),
    'deleteItem' : IDL.Func([IDL.Nat], [], []),
    'getItems' : IDL.Func(
        [],
        [IDL.Vec(IDL.Tuple(IDL.Nat, IDL.Text, IDL.Bool))],
        ['query'],
      ),
    'toggleItem' : IDL.Func([IDL.Nat], [], []),
  });
};
export const init = ({ IDL }) => { return []; };
