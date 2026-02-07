import "./Footer.css";
//import { FaInstagram, FaYoutube, FaMap, FaPhone } from "react-icons/fa";
import logo from "../images/logo.png";

function Footer() {
  return (
    <footer className="footer">
      <div>
        <h4>ಶ್ರೀ ವಿಶ್ವಕರ್ಮ ಬ್ರಾಹ್ಮಣ ಸಮಾಜ ಸೇವಾ ಸಂಘ (ರಿ.)</h4>
        <p>ರಿ. ನಂಬ್ರ. 75/82-83 <br/>ನೀರೆ ಬೈಲೂರು - 574102, ಕಾರ್ಕಳ ತಾಲೂಕು.</p>
      </div>

     <img src={logo} alt="logo" className="nav-logo" />
{/*
      <div className="icons">
        <FaInstagram />
        <FaYoutube />
        <FaMap />
        <FaPhone />
      </div>
      */}

      {/*<p className="copy">© 2026 All Rights Reserved</p>*/}
    </footer>
  );
}

export default Footer;
