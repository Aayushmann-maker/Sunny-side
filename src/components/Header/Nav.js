import React, { useState } from "react";
import logo from "../../images/logo.svg";
import MobileLinks from "./MobileLinks";
import "./Nav.css";

const Nav = () => {
  const [toggleState, setToggleState] = useState(false);
  const toggleHandler = () => {
    setToggleState(prevState => !prevState);
  };

  const navLink = (link, special) => {
    return (
      <li className="nav__item">
        <a href="#" className={`${special ? "special-link" : ""} nav__link`}>
          {link}
        </a>
      </li>
    );
  };
  return (
    <nav className="nav">
      <div className="nav__left">
        <img src={logo} alt="" />
      </div>
      <ul className="nav__right">
        {navLink("About")}
        {navLink("Services")}
        {navLink("Projects")}
        {navLink("Contact", "special")}
      </ul>
      <div
        className={`${toggleState ? "hamburger-menu " : "hamburger-menu "}`}
        onClick={toggleHandler}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <MobileLinks flag={toggleState} />
    </nav>
  );
};

export default Nav;
