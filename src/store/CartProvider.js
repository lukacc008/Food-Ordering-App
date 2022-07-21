import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

//proveravam dal je item vec u korpi (findIndex nalazi indeks predmeta
//u nizu) Da li trenutni item ima isti id kao item koji dodajemo trenutnom
//akcijom. I to mi vrati index itema ako vec postoji
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItems;
//if check ce biti izvrsen ako je existingCartItem TRUE sto je samo ako
//je deo skupa/niza, onda kopiram trenutni item (existingCartItem) i
// saberem ga sa trenutnim amountom (ako se dodaju isti burgeri ne siri
//se lista vec se samo amount povecava)
    if (existingCartItem) {
     const updatedItem = {
       ...existingCartItem,
       amount: existingCartItem.amount + action.item.amount,
      };
//updateovane iteme stavim da budu trenutni itemi.
      updatedItems = [...state.items];
//izaberem stari item koji sam gore definisao i kazem mu da postane
//updatedItem
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      //concat mi daje nov array a ne edituje strai!
      //vazno je jer ne zelim da updateujem stari state
      //ovo se aktivira ako se item prvi put dodaje u cart
      updatedItems = state.items.concat(action.item);
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };



  }
  if (action.type === "REMOVE_ITEM") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existingItem.price;
    let updatedItems;
    //ako je existingItem.amount = 1 onda znaci da je poslednji item tog
    //tipa i klikom na dugme "-" cu ceo item da obrisem.
    //filter vraca novi array, ako funkcija vrati true zadrzavam item
    //ako vrati false brise se u potpunosti.
    //ITEM koji nema isti ID kao action ID se zadrzava jer se vraca true
    if (existingItem.amount === 1) {
      updatedItems = state.items.filter(item => item.id !== action.id);
    //u else bloku zadrzavam item u cartu al mu smanjujem amount.
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount -1 };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount
    };
  }

  return defaultCartState;
};

//Drugi element useReducera je funkcija u ovom slucaju dispatchCartAction
//i koristi se u funkcijama za dodavanje i brisanje ajtema iz korpe
// TYPE je prop koji koristim gore u funkciji cartReducer za prepoznavanje
// "akcije" koja se odvija tu.
const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD_ITEM", item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE_ITEM", id: id });
  };

// Vrednosti koje cartContext dobija preko funkcija i reducera
// I postavljen je kao vrednost CartContext.Provider-a kroz value prop

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
