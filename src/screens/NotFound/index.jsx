import React from "react";
import { NavLink } from "react-router-dom";
import { routes } from "../../routes";

function NotFound() {
  return (
    <div>
      <div className="messageErreur">
        <h1 className="codeErreur">404</h1>
        <p className="textErreur">
          Oups! La page que vous demandez n'existe pas.
        </p>
        <NavLink to={routes.home} className="lienRetourErreur">
          Retourner sur la page d'accueil
        </NavLink>
      </div>
    </div>
  );
}

export default NotFound;
