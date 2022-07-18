import { useContext, useEffect, useState } from "react";

import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

//cartCtx je konstanta koja ima vrednosti CartContext-a zatim
// { items } dobija vrednost CartContext-a i zatim reduce metodom
// iz skupa dobijam jednu vrednost!

 const cartCtx = useContext(CartContext);
 const { items } = cartCtx;


 //reduce ima 2 argumenta jedan je funkcija drugi pocetna vrednost (0)
 //funkcija takodje ima 2 argumenta currentNumber ima pocetnu vrednost 0
 // kada se funkcija izvrsi postace rezultat koji vracam
 // (currentNumber + item.amount) gde item.amount ima amount polje u
 //kome je broj itema. Sve to reduce metodom svedem na jedan broj i
 //dinamicno ga predstavim dole u <span>.
 const numberOfCartItems = items.reduce((currentNumber, item) => {
   return currentNumber + item.amount;
 }, 0);

 const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;
 
  useEffect(() => {
    if (cartCtx.items.length === 0) {
      return;
    }
   setBtnIsHighlighted(true);

  const timer = setTimeout(() => {
     setBtnIsHighlighted(false);
   }, 300);

   return () => {
    clearTimeout(timer);
   };
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Vaša Porudžbina</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
