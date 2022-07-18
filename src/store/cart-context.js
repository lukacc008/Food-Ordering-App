import React from "react";


//pocetne vrednosti i dve funkcije pomocu kojih mogu da updateujem
//CartContext.
const CartContext = React.createContext({
    items: [],
    totalAmount: 0,
    addItem: (item) => {},
    removeItem: (id) => {}
});

export default CartContext;