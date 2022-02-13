import React from "react";
import "./MobileLinks.css";

const MobileLinks = ({ flag }) => {
  const MobileLink = (link, special) => {
    return (
      <li className="mobile__item">
        <a
          className={`${special ? "btn--link mobile__link" : "mobile__link"}`}
          href="#"
        >
          {link}
        </a>
      </li>
    );
  };
  return (
    <ul className={`${flag ? "mobile-links active" : "mobile-links"}`}>
      {MobileLink("About")}
      {MobileLink("Services")}
      {MobileLink("Projects")}
      {MobileLink("Contact", "special")}
    </ul>
  );
};

export default MobileLinks;
