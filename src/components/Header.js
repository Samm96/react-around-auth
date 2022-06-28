import React from "react";

function Header ({
  logText,
  userEmail,
  loggedIn,
  loggedOut

}) {
  return (
      <header className="header">
        <img src={require("../images/logo.svg")} className="header__logo" alt="Around the U.S. Logo" />
        <div className="header__container">
          <p className="header__sign">logText</p>
          <button className={loggedIn ? "header__email" : "header__email_hidden"}>userEmail</button>
          <button className="menu-button" alt="Menu"></button>
        </div>
      </header>
  );
}

export default Header;
