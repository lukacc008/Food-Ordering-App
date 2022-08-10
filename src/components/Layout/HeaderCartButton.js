import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span>POGLEDAJ MENI</span>
    </button>
  );
};

export default HeaderCartButton;
