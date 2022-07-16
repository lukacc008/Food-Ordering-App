import React, { Fragment } from "react";
import Map from "../components/UI/Map";
import classes from "./Contact.module.css";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

const Contact = () => {
  return (
    <Fragment>
      <Map />

      <div className={classes.summary}>
        <h2>Na Najboljem Mestu Najbolji Burgeri!</h2>
        <p>
          Posetite nas na adresi Jurija Gagarina 151 Beograd i uverite se u
          kvalitet i ukus naših smešovanih burgera!
        </p>
        <h2>Radno Vreme Utorak-Nedelja 11:00 - 23:00</h2>
      </div>

      <div className={classes.footer}>
        <h3>Bad-Guys burgers d.o.o.</h3>
        <div className={classes.kontakti}>
          {" "}
          <a href="https://www.facebook.com/" target="_blank">
            <BsFacebook color="white" size="1em" />
          </a>{" "}
          <a href="https://www.instagram.com/" target="_blank">
            <BsInstagram color="white" size="1em" />
          </a>{" "}
          <a href="https://twitter.com/" target="_blank">
            <BsTwitter color="white" size="1em" />
          </a>
        </div>
      </div>
    </Fragment>
  );
};

export default Contact;
