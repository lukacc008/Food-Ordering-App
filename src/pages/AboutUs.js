import { Fragment } from "react";
import Footer from "../components/Footer/Footer";
import ImageSlider from "../components/UI/ImageSlider";
import SliderData from "../components/UI/ImageSliderData";
import classes from "./AboutUs.module.css";
import { GiHamburger } from "react-icons/gi"

const AboutUs = () => {
  return (
    <Fragment>
      <div className={classes.body}>
      <header className={classes.header}>
        <GiHamburger className={classes.burger}/><h1>BAD GUYS</h1><GiHamburger className={classes.burger}/>
      </header>

      <div className={classes.summary}>
      <h2>Prvi Smešovani Burgeri U Beogradu!</h2>
      <p>
        Ovi burgeri spremljeni su na specijalan način odnosno smešovanjem,
        kako bi se postigao najbolji ukus i kako bi meso bilo najhrskavije!
      </p>
      <p>
        U koliko nikada niste probali smešovane burgere, garantujemo
        vam da ćete ostati bez teksta!
      </p>
    </div>

    <div>
      <ImageSlider slides={SliderData}/>
    </div>
    <Footer />
    </div>
    </Fragment>
  );
};
export default AboutUs;
