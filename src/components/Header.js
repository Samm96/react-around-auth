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
          <p className="header__email">userEmail</p>
          <img src={require("../images/menu.png")} className="header__menu" alt="Menu" />
        </div>
      </header>
  );
}

export default Header;
