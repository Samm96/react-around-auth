import React from "react";
import { Route, Link } from "react-router-dom";


function Header ({
  userEmail,
}) {
  return (
      <header className="header">
        <img src={require("../images/logo.svg")} className="header__logo" alt="Around the U.S. Logo" />
        <Route exact path="/">
        <div className="header__container">
          <button className="header__sign">Log out</button>
          <p className="header__email">{userEmail}</p>
          <button className="menu-button" alt="Menu"></button>
        </div>
        </Route>
        <Route path="/signup">
        <div className="header__container">
          <Link className="header__sign" to="/signin">Sign in</Link>
          <p className="header__email header__email_hidden">{userEmail}</p>
          <button className="menu-button" alt="Menu"></button>
        </div>
        </Route>
        <Route path="/signin">
        <div className="header__container">
          <Link className="header__sign" to="/signup">Sign up</Link>
          <p className="header__email_hidden">{userEmail}</p>
          <button className="menu-button" alt="Menu"></button>
        </div>
        </Route>
      </header>
  );
}

export default Header;
