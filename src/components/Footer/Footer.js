import classes from "./Footer.module.css";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <h1>FOOTER</h1>
      <div className={classes.kontakti}>
        {" "}
        <a href="https://www.facebook.com/">
          <BsFacebook color="white" size="2em" />
        </a>{" "}
        <a href="https://www.instagram.com/">
          <BsInstagram color="white" size="2em" />
        </a> {" "}
        <a href="https://twitter.com/">
          <BsTwitter color="white" size="2em"/>
        </a>
        </div>
    </div>
  );
};

export default Footer;
