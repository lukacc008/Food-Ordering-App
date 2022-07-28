import { Fragment } from "react";
import { NavLink } from "react-router-dom";

import AboutUs from "../../pages/AboutUs";
import HeaderCartButton from "./HeaderCartButton";
import mealsImage from "../../assets/burgerica.jpg";
import badGuysLogo from "../../assets/logo.jpeg"
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <div className={classes["logo-image"]}>
        <img src={badGuysLogo} />
        </div>
        <nav>
         <NavLink className={classes.navigacija} to="/o-nama">O NAMA</NavLink>
         <NavLink to="/kontakt">KONTAKT</NavLink>
        </nav>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="Burgers" />
      </div>
    </Fragment>
  );
};

export default Header;
