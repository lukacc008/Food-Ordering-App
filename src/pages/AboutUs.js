import { Fragment } from "react";
import ImageSlider from "../components/UI/ImageSlider";
import SliderData from "../components/UI/ImageSliderData";
import classes from "./AboutUs.module.css";
import { GiHamburger } from "react-icons/gi"

const AboutUs = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <GiHamburger className={classes.burger}/><h1>BAD GUYS BURGERS</h1><GiHamburger className={classes.burger}/>
      </header>
    <div>
      <ImageSlider slides={SliderData}/>
    </div>
    </Fragment>
  );
};
export default AboutUs;
