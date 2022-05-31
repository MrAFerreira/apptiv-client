import React from "react";
import apptivLogo from "../assets/images/apptiv-logo.svg";

function Header() {
  return (
    <header>
      <div className="div-for-header-flex"></div>
      <img src={apptivLogo} alt="apptiv logo" />
      {/* <Avatar /> */}
    </header>
  );
}

export default Header;