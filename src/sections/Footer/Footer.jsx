import { Link } from "react-router-dom";
// icons
import {
  FaTelegram,
  FaInstagram,
  FaWhatsapp,
  FaTwitter,
  FaLinkedin,
  FaFacebookF,
} from "react-icons/fa";
import Logo from "./../../assets/image/logo.svg";
// style
import "./Footer.css";
function Footer() {
  return (
    <footer className="footer mt-3 mt-md-0 pt-5">
      <div className="footerDesc row d-flex align-items-center justify-content-around mb-5">
        <div className="footerLogoBox col-12 col-md-6 col-lg-4 d-flex align-items-center justify-content-center mb-5 mb-lg-0">
          <img src={Logo} alt="Logo" className="footerLogo me-3" />
          <h1 className="fs-1 fw-bold">CALI</h1>
        </div>
        <div className="footerSocialMediaBox col-12 col-md-6 col-lg-4 text-center mb-5 mb-lg-0">
          <h1 className="fs-4 d-inline-block fw-bold border-bottom border-secondary mb-2">
            Socials
          </h1>
          <a
            href="https://facebook.com"
            className="d-flex align-items-center justify-content-center mb-1 Link"
          >
            <FaFacebookF className="footerSocialIcon me-2" />
            Facebook
          </a>
          <a
            href="https://www.linkedin.com/in/ali-hafezi-759b7b232/"
            className="d-flex align-items-center justify-content-center mb-1 Link"
          >
            <FaLinkedin className="footerSocialIcon me-2" />
            Linkedine
          </a>
          <a
            href="https://twitter.com/sirAliHafezis"
            className="d-flex align-items-center justify-content-center mb-1 Link"
          >
            <FaTwitter className="footerSocialIcon me-2" />
            Twitter
          </a>
          <a
            href="https://t.me/+989380397555"
            className="d-flex align-items-center justify-content-center mb-1 Link"
          >
            <FaTelegram className="footerSocialIcon me-2" />
            Telegram
          </a>
          <a
            href="https://wa.me/+989380397555"
            className="d-flex align-items-center justify-content-center mb-1 Link"
          >
            <FaWhatsapp className="footerSocialIcon me-2" />
            Whatsapp
          </a>
          <a
            href="https://instagram.com/justalihs"
            className="d-flex align-items-center justify-content-center mb-1 Link"
          >
            <FaInstagram className="footerSocialIcon me-2" />
            Instagram
          </a>
        </div>
        <div className="footerShortcuts col-12 col-lg-4 d-flex justify-content-evenly justify-content-md-center">
          <ul className="footerShortcutList d-flex flex-column align-items-center p-0">
            <li className="fw-bold border-bottom border-secondary mb-2">
              Coins
            </li>
            <Link to={`/Bitcoin`} className="Link">
              <li className="footerShortcutItem mb-1">Bitcoin</li>
            </Link>
            <Link to={`/Ethereum`} className="Link">
              <li className="footerShortcutItem mb-1">Ethereum</li>
            </Link>
            <Link to={`/Tether`} className="Link">
              <li className="footerShortcutItem">Tether</li>
            </Link>
          </ul>
          <ul className="footerShortcutList d-flex flex-column align-items-center">
            <li className="fw-bold border-bottom border-secondary mb-2">
              Pages
            </li>
            <Link to={`/login`} className="Link">
              <li className="footerShortcutItem mb-1">Login</li>
            </Link>
            <Link to={`/about`} className="Link">
              <li className="footerShortcutItem mb-1">About</li>
            </Link>
            <Link to={`/contact`} className="Link">
              <li className="footerShortcutItem">Contact</li>
            </Link>
          </ul>
        </div>
      </div>
      <div className="footerCopy">
        <p className="fw-normal text-center text-secondary">
          © 2022 CALI. All rights reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
