import React, { Fragment } from "react";
import Map from "../components/UI/Map";
import classes from "./Contact.module.css";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

const Contact = () => {
  return (
    <Fragment>
      <Map />
      <div className={classes.footer}>
      <h3>Bad-Guys burgers d.o.o.</h3>
      <div className={classes.kontakti}>
        {" "}
        <a href="https://www.facebook.com/" target="_blank">
          <BsFacebook color="white" size="1em" />
        </a>{" "}
        <a href="https://www.instagram.com/" target="_blank">
          <BsInstagram color="white" size="1em"  />
        </a> {" "}
        <a href="https://twitter.com/" target="_blank">
          <BsTwitter color="white" size="1em" />
        </a>
        </div>
    </div>
    </Fragment>
  );
};

export default Contact;
