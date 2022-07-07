import { Fragment } from "react";
import ImageSlider from "../components/UI/ImageSlider";
import SliderData from "../components/UI/ImageSliderData";
import classes from "./AboutUs.module.css";
import { GiHamburger } from "react-icons/gi"

const AboutUs = () => {
  return (
    <Fragment>
      <div className={classes.body}>
      <header className={classes.header}>
        <GiHamburger className={classes.burger}/><h1>BAD GUYS BURGERS</h1><GiHamburger className={classes.burger}/>
      </header>

      <div className={classes.summary}>
      <h2>Najbolji Burgeri U Gradu Kucaju Na Vaša Vrata</h2>
      <p>
        Izaberite vaš omiljeni burger iz naše ponude 
        i uzivajte u prelepom ručku ili večeri kod kuće!
      </p>
      <p>
        Svi naši burgeri pripremljeni su sa najkvalitetnijim sastojcima, od strane
        iskusnih burger majstora sa višegodišnjim iskustvom!
      </p>
    </div>

    <div>
      <ImageSlider slides={SliderData}/>
    </div>
    </div>
    </Fragment>
  );
};
export default AboutUs;
