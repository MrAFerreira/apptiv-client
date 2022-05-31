import React from "react";
import styled from "styled-components";
import apptivLogo from "../assets/images/apptiv-logo.svg";
import ButtonBottom from "../components/ButtonBottom";

import { Link } from "react-router-dom";

const SplashTag = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;

  .logo-tagline {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .auth-buttons {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .button-login-link {
    text-decoration: none;
    color: white;
    font-weight: 700;
  }

  .a-link {
    font-weight: 700;
    color: black;
  }
`;

function SplashScreenPage() {
  return (
    <SplashTag>
      <div className="div-splash-for-flex"></div>
      <div className="logo-tagline">
        <img className="apptiv-logo-big" src={apptivLogo} alt="apptiv logo" />
        <h4>The app that makes you active</h4>
      </div>

      <div className="auth-buttons">
        <ButtonBottom>
          <Link className="button-login-link" to="/login">
            Log in
          </Link>
        </ButtonBottom>
        <p>
          Don't have an account?
          <span> </span>
          <Link className="a-link" to="/signup">
            Sign up
          </Link>
        </p>
      </div>
    </SplashTag>
  );
}

export default SplashScreenPage;
