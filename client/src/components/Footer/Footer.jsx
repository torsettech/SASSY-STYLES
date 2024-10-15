import "./footer.css";
import Logo from "../../assets/Logo.png";
import { FaWhatsapp,FaInstagram,FaFacebook } from "react-icons/fa6";
import Subscribe from "./Subscribe";
import Copyright from "./Copyright";
import {Link} from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer>
      <div className="logo-container">
        <img src={Logo} alt="LOGO" />
      </div>
      <div className="links">
        <p className="footer-title">Links</p>
        <ul>
          <Link to="/our-story"><li>Our Story</li></Link>
          <Link to="our-products"><li>Our Products</li></Link>
          <Link to="/our-story"><li>Our Team</li></Link>
          <Link to="/our-mission"><li>Our Mission</li></Link>
          <li>Contact Us</li>
        </ul>
      </div>
      <div>
        <p className="footer-title">Socials</p>
        <div className="socials">
          <span className="whatsapp" ><FaWhatsapp /></span>
          <span className="instagram"><FaInstagram  /></span>
          <span className="facebook"><FaFacebook /></span>
        </div>
      </div>

      <div className="subscribe-form">
        <p className="footer-title">Subscribe</p>

        <p className="subscribe-text">Want to be notified on our new products or our next live events?</p>
        <p className="subscribe-text-2">Subscribe to our news letter</p>
        <Subscribe />
      </div>
    </footer>
    <Copyright />
    </>
  )
}

export default Footer