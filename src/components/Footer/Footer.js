import classes from "./Footer.module.css";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs"

const Footer = () => {
  return (
  <div className={classes.footer}>
    <h1>FOOTER</h1>
        <p>Drustvene mreze: <BsFacebook /> <BsInstagram /> <BsTwitter /></p>
  </div>
  )
};

export default Footer;
