const HeaderCartButton = (props) => {
  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span>POGLEDAJ MENI</span>
    </button>
  );
};

export default HeaderCartButton;
