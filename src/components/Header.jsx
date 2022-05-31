import React from "react";
import apptivLogo from "../assets/images/apptiv-logo.svg";
import styled from "styled-components";

const HeaderTag = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  .apptiv-logo {
    width: 60px;
  }
`;

function Header() {
  return (
    <HeaderTag>
      <div className="div-for-header-flex"></div>
      <img className="apptiv-logo" src={apptivLogo} alt="apptiv logo" />
      <div> {/* <Avatar /> */}</div>
    </HeaderTag>
  );
}

export default Header;
