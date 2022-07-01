import React, { useState } from "react";
import { Route } from "react-router-dom";

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


  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Route path="/pocetna">
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
      <Footer />
      </Route>
      <Route path="/about-us"><AboutUs /></Route>
    </CartProvider>
  );
}

export default App;
