import classes from "./Footer.module.css";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import badGuysLogo from "./../../assets/logo.jpeg"

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes["logo-image"]}>
        <img src={badGuysLogo} />
        </div>
      <div className={classes.kontakti}>
        {" "}
        <a href="https://www.facebook.com/badguysnbg" target="_blank">
          <BsFacebook color="#FCB714" size="2em" />
        </a>{" "}
        <a href="https://www.instagram.com/badguysnbg/" target="_blank">
          <BsInstagram color="#FCB714" size="2em"  />
        </a> {" "}
        </div>
    </div>
  );
};

export default Footer;
