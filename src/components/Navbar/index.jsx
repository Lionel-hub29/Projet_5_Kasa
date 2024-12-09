import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { routes } from "../../routes";

const Navbar = () => {
  return (
    <header className="header">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="menuHeader">
        <nav className="itemHeader">
          <NavLink className="menu1" to={routes.home}>
            Accueil
          </NavLink>
          <NavLink className="menu2" to={routes.about}>
            A propos
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
