import { useContext } from "react";

import MealItemForm from "./MealItemForm";
import classes from "./MealItem.module.css";
import CartContext from "../../../store/cart-context";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);
  const price = `${props.price} RSD`;

//addItem je funkcija u CartProvider.js  addItemToCartHandler koja ocekuje
// amount dobijam iz MealItemForm.js preko ref-ova
//id, name i price iz AvailableMeals.js putem propsa
  const onAddToCartHandler = amount => {
   cartCtx.addItem({
     id: props.id,
     name: props.name,
     amount: amount,
     price: props.price
   });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        
      </div>
    </li>
  );
};

export default MealItem;
