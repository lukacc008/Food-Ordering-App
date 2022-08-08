import { Fragment } from "react";
import Footer from "../components/Footer/Footer";
import classes from "./AboutUs.module.css";
import Logo from "./../assets/logo.jpeg"
import Image1 from "./../assets/slika1.jpg"
import Image2 from "./../assets/slika2.jpg"
import Image3 from "./../assets/slika3.jpg"
import Image4 from "./../assets/slika4.jpg"
import Image5 from "./../assets/slika5.jpg"
import Image6 from "./../assets/slika6.jpg"
import Image7 from "./../assets/slika7.jpg"
import Image8 from "./../assets/slika8.jpg"
import Image9 from "./../assets/slika9.jpg"
import Image10 from "./../assets/slika10.jpg"
import Image11 from "./../assets/slika11.jpg"
import Image12 from "./../assets/slika12.jpg"
import Image13 from "./../assets/slika13.jpg"
import Image14 from "./../assets/slika14.jpg"
import Image15 from "./../assets/slika15.jpg"
import Image16 from "./../assets/slika16.jpg"
const AboutUs = () => {
  return (
    <Fragment>
      <header className={classes.header}>
     <p>Adresa: Gandijeva 148a, Beograd</p><img src={Logo} /><p>Telefon: 063/331-233</p>
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

    <ul className={classes.lista}>
      <li><img src={Image1} /></li>
      <li><img src={Image2} /></li>
      <li><img src={Image3} /></li>
      <li><img src={Image4} /></li>
      <li><img src={Image5} /></li>
      <li><img src={Image6} /></li>
      <li><img src={Image7} /></li>
      <li><img src={Image8} /></li>
      <li><img src={Image9} /></li>
      <li><img src={Image10} /></li>
      <li><img src={Image11} /></li>
      <li><img src={Image12} /></li>
      <li><img src={Image13} /></li>
      <li><img src={Image14} /></li>
      <li><img src={Image15} /></li>
      <li><img src={Image16} /></li>
    </ul>  
    <Footer />
    </Fragment>
  );
};
export default AboutUs;
