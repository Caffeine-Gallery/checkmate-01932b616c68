import Bool "mo:base/Bool";

import Array "mo:base/Array";
import Nat "mo:base/Nat";
import Text "mo:base/Text";

actor {
    stable var items : [(Nat, Text, Bool)] = [];

    public shared func addItem(text : Text) : async () {
        let id = Array.size(items) + 1;
        items := Array.append(items, [(id, text, false)]);
    };

    public shared query func getItems() : async [(Nat, Text, Bool)] {
        return items;
    };

    public shared func toggleItem(id : Nat) : async () {
        items := Array.map<(Nat, Text, Bool), (Nat, Text, Bool)>(items, func (item) {
            if (item.0 == id) {
                (item.0, item.1, not item.2)
            } else {
                item
            }
        });
    };

    public shared func deleteItem(id : Nat) : async () {
        items := Array.filter<(Nat, Text, Bool)>(items, func (item) {
            item.0 != id
        });
    };
};
