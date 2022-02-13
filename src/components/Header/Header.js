import React from "react";
import "./Header.css";
import Nav from "./Nav";
import Arrow from "../../images/icon-arrow-down.svg";

const Header = () => {
  return (
    <header className="header">
      <Nav />
      <div className="header__content">
        <h1 className="header__text">We are Creatives</h1>
        <img src={Arrow} alt="Arrow" />
      </div>
    </header>
  );
};

export default Header;
