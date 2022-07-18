import { useRef, useState } from "react";

import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  //useRef moram da stavim pointer dole u input pod "ref" prop
  //Da bi ref mogao da se passuje u custom componentu TJ Input u ovom
  //slucaju, Input.js mora biti obavijena React.forwardRef-om koji kao
  //parametre prima props i ref.
  const amountInputRef = useRef();

//Sprecava browser da se reloaduje
  const submitHandler = (event) => {
    event.preventDefault();

    //ref vraca string iako je broj, zato sam ga konvertovao u broj
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false)
      return;
    }

//funkcija ciju cu vrednost proslediti kroz props, a vrednost je 
//validan broj koji sam dobio kroz ref.
    props.onAddToCart(enteredAmountNumber);
  };
 
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Količina"
        input={{
          id: "amount" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>Dodaj u korpu</button>
      {!amountIsValid && <p>Unesite validnu vrednost (1-5).</p>}
    </form>
  );
};

export default MealItemForm;
