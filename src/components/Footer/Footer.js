import classes from "./Footer.module.css";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <h3>Bad-Guys burgers d.o.o.</h3>
      <div className={classes.kontakti}>
        {" "}
        <a href="https://www.facebook.com/" target="_blank">
          <BsFacebook color="white" size="1em" />
        </a>{" "}
        <a href="https://www.instagram.com/">
          <BsInstagram color="white" size="1em" target="_blank" />
        </a> {" "}
        <a href="https://twitter.com/">
          <BsTwitter color="white" size="1em" target="_blank"/>
        </a>
        </div>
    </div>
  );
};

export default Footer;
