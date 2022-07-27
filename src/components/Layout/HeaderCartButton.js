import { useContext, useEffect, useState } from "react";

import CartContext from "../../store/cart-context";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

//cartCtx je konstanta koja ima vrednosti CartContext-a zatim

 const cartCtx = useContext(CartContext);
 //iz cartCtx ekstraktujem samo items i stavim ih u dependency u
 //useEffectu da bi se pokretao samo kada se item promeni.
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
      <span>POGLEDAJ MENI</span>
    </button>
  );
};

export default HeaderCartButton;
