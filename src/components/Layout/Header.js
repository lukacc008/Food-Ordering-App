import { Fragment } from "react";
import { NavLink } from "react-router-dom";

import AboutUs from "../../pages/AboutUs";
import HeaderCartButton from "./HeaderCartButton";
import mealsImage from "../../assets/burgerica.jpg";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>BAD-GUYS BURGERI</h1>
        <nav>
         <NavLink to="/o-nama">O NAMA</NavLink>
         <NavLink to="/kontakt">KONTAKT</NavLink>
        </nav>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table full of delicious food!" />
      </div>
    </Fragment>
  );
};

export default Header;
