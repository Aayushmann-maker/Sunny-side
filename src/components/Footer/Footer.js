import React from "react";
import "./Footer.css";
import logo from "../../images/logo.svg";
import FaceBook from "../../images/icon-facebook.svg";
import Instagram from "../../images/icon-instagram.svg";
import Twitter from "../../images/icon-twitter.svg";
import Pinterest from "../../images/icon-pinterest.svg";

const Footer = () => {
  const footerLink = link => {
    return (
      <li className="footer__item">
        <a href="" className="footer__link">
          {link}
        </a>
      </li>
    );
  };
  return (
    <footer className="footer">
      <img className="footer__logo" src={logo}></img>
      <ul className="footer__links">
        {footerLink("About")}
        {footerLink("Services")}
        {footerLink("Contact")}
      </ul>
      <div className="footer__social">
        <a href="#">
          <img src={FaceBook} alt="Facebook" />
        </a>
        <a href="#">
          <img src={Instagram} alt="Instagram" />
        </a>
        <a href="#">
          <img src={Twitter} alt="Twitter" />
        </a>
        <a href="#">
          <img src={Pinterest} alt="Pinterest" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
