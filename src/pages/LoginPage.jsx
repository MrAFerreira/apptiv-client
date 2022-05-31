import { useState, useContext } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import styled from "styled-components";
import ButtonBottom from "../components/ButtonBottom";

import appleLogo from "../assets/images/social-media-signup.svg";
import gitHubLogo from "../assets/images/icon-park_github-one.svg";
import googleLogo from "../assets/images/icon-park_google.svg";

function LoginPage(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();
  const { storeToken, authenticateUser } = useContext(AuthContext);

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const body = {
      email: email,
      password: password,
    };
    axios
      .post(`${process.env.REACT_APP_BASE_URL}/api/auth/login`, body)
      .then((response) => {
        storeToken(response.data.authToken);
        authenticateUser();
        navigate("/event-list");
      })
      .catch((err) => {
        setErrorMessage(err.response.data.errorMessage);
      });
  };

  const H1 = styled.h1`
    font-style: normal;
    font-weight: 1000;
    font-size: 36px;
    line-height: 50px;
    text-align: center;
  `;

  const Input = styled.input`
    background: #ffffff;
    border: 1px solid #c2c2c2;
    border-radius: 10px;
    width: 342px;
    height: 50px;
    margin-bottom: 0.5rem;
  `;
  const Label = styled.label`
    font-style: normal;
    font-weight: 1000;
    font-size: 15px;
    line-height: 21px;
    letter-spacing: -0.24px;
    color: #ebb220;
    text-align: left;
  `;

  const FormContainer = styled.div`
    text-align: left;
    padding: 0 1rem;

    .sign-up-container {
      text-align: center;
    }
    button {
      margin: 1rem 0;
    }
  `;

  const Button = styled(ButtonBottom)`
    margin: 1rem 0;
  `;

  const LogoContainer = styled.div`
    display: flex;
    justify-content: space-around;

    .logo {
      width: 64px;
      height: 64px;
      color: white;
      background: #ebb220;
      border-radius: 54px;
    }
    .signup-p {
      text-align: center !important;
    }
  `;

  return (
    <FormContainer>
      <H1>Login</H1>

      <form onSubmit={handleLoginSubmit}>
        <Label>Email address:</Label>
        <Input type="email" name="email" value={email} onChange={handleEmail} />

        <Label>Password:</Label>
        <Input
          type="password"
          name="password"
          value={password}
          onChange={handlePassword}
        />

        <Button type="submit">Continue</Button>
      </form>
      <p>or log in with</p>
      <LogoContainer>
        <img className="logo" src={appleLogo} />
        <img className="logo" src={gitHubLogo} />
        <img className="logo" src={googleLogo} />
      </LogoContainer>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <div className="sign-up-container">
        <p className="signup-p">Don't have an account yet?</p>
        <Link to={"/signup"} style={{ color: "black" }}>
          Sign Up
        </Link>
      </div>
    </FormContainer>
  );
}

export default LoginPage;
