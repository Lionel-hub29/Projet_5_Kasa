import React from "react";
import logoFooter from "../../assets/images/logoFooter.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src={logoFooter} alt="LogoFooter" />
      </div>
      <div className="textFooter">
        <p>&copy; 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
