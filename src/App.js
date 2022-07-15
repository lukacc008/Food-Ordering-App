import React, { useState } from "react";
import { Route } from "react-router-dom";

import Contact from "./pages/Contact";
import AboutUs from "./pages/AboutUs";
import Footer from "./components/Footer/Footer";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

// Putem props-a vrednost funkcije showCartHandler saljem iz App.js 
// u Header.js i na kraju na button sa ugradjenim onClick u HeaderCartButton.js

// Takodje putem props-a hideCartHandler saljem iz App.js u Cart.js
// i tamo u okviru button taga na ugradjeni onClick prosledim
// props.onClose i tako se zatvara modal klikom na dugme.

// U Modal.js na konstanti Backdrop prebacim prop onClose na ugradjeni
// onClick tag div-a i dole u JSX kodu na Backdrop onClose={props.onClose}
// tako se zatvara modal klikom na backdrop!!

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Route path="/" exact>
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
      <Footer />
      </Route>
      <Route path="/o-nama"><AboutUs /></Route>
      <Route path="/kontakt"><Contact /></Route>
    </CartProvider>
  );
}

export default App;
