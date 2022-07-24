import classes from "./Footer.module.css";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import badGuysLogo from "./../../assets/logo.jpeg"

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes["logo-image"]}>
        <img src={badGuysLogo} />
        </div>
      <div className={classes.kontakti}>
        {" "}
        <a href="https://www.facebook.com/" target="_blank">
          <BsFacebook color="white" size="1em" />
        </a>{" "}
        <a href="https://www.instagram.com/badguysnbg/" target="_blank">
          <BsInstagram color="white" size="1em"  />
        </a> {" "}
        <a href="https://twitter.com/" target="_blank">
          <BsTwitter color="white" size="1em" />
        </a>
        </div>
    </div>
  );
};

export default Footer;
