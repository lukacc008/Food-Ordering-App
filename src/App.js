import React, { useState , Fragment } from "react";
import { Route } from "react-router-dom";

import classes from "./App.module.css"
import AboutUs from "./pages/AboutUs";
import Footer from "./components/Footer/Footer";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import Mapa from "./components/Layout/Mapa";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <Fragment>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Route path="/" exact>
      <Header onShowCart={showCartHandler} />
      <main className={classes.main}>
        <Meals />
        <Mapa />
      </main>
      <Footer />
      </Route>
      <Route path="/galerija"><AboutUs /></Route>
      </Fragment>
  );
}

export default App;
