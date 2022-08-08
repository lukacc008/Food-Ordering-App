import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

const Cart = (props) => {
  return (
    <Modal onClose={props.onClose}>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Zatvori
        </button>
      </div>
    </Modal>
  );
};

export default Cart;
