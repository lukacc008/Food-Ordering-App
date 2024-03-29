import React, { Fragment } from "react";

import Mapaa from "./../../assets/MapaBadguys.png";
import Flajer from "./../../assets/flajer.jpeg";
import classes from "./Mapa.module.css";
import Glovo from "./../../assets/glovo-circle.png"

const Mapa = () => {
  return (
    <Fragment>
      <div className={classes.mainDiv}>
        <img src={Flajer} />
        <img src={Mapaa} />
      </div>
      <div className={classes.summary}>
        <a href="https://goo.gl/maps/sWbGiUWYXfiNwQY37" target="_blank">
          kako do nas?
        </a>
        <h2>Na Najboljem Mestu Najbolji Burgeri!</h2>
        <p>
          Posetite nas na adresi Gandijeva 148a, Beograd i uverite se u kvalitet
          i ukus naših smešovanih burgera!
        </p>
        <h2>Radno Vreme Ponedeljak-Subota 11:00 - 23:00</h2>
      </div>
      <div className={classes.glovo}>
        <p>DOSTUPNI SMO I NA</p> <img src={Glovo}/>
      </div>
    </Fragment>
  );
};

export default Mapa;
