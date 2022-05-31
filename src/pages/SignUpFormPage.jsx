import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/auth.context';
import axios from 'axios';
import appleLogo from '../assets/images/icon-park_apple.svg';
import githubLogo from '../assets/images/icon-park_github-one.svg';
import googleLogo from '../assets/images/icon-park_google.svg';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-flow: column wrap;
  font-size: 1rem;
  label {
    color: ${({ theme }) => theme.colors.mainOrange || '#EBB220'};
    align-self: flex-start;
  }
  input {
    ${({ theme }) => theme.colors.lightGrey || '#EBB220'};
    padding: 12px 10px;
  }
  button {
    background-color: ${({ theme }) => theme.colors.mainOrange || '#EBB220'};
    border-style: none;
    color: ${({ theme }) => theme.colors.white || ' #ffffff'};
    width: 100%;
    height: 3rem;
    margin-top: 1rem;
    border-radius: 8px;
    padding: 80px 20px 80px 20;
    text-align: center;
    font-size: 22px;
  }
`;

function SignUpFormPage() {
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState(undefined);
  const navigate = useNavigate();

  const { storeToken, autenticateUser } = useContext(AuthContext);

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = { username, email, password };
    console.log(body);
    axios
      .post(`${process.env.REACT_APP_BASE_URL}/api/auth/signup`, body)
      .then((response) => {
        console.log(response.data);
        navigate('/event-list');
      })
      .catch((err) => {
        setErrorMessage(err.response.data.errorMessage);
      });
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="username">Username*</label>
        <input
          type="text"
          placeholder="John Doe"
          value={username}
          name="username"
          onChange={handleUsername}
        />

        <label htmlFor="email">Email address*</label>
        <input
          type="email"
          placeholder="example@email.com"
          value={email}
          name="email"
          onChange={handleEmail}
        />

        <label htmlFor="password">Password*</label>
        <input type="password" value={password} name="password" onChange={handlePassword} />

        <button type="submit">Sign Up</button>
      </Form>
      <p>or sign up with</p>
      <Link to="">
        <img src={appleLogo} alt="apple logo" />
      </Link>
      <Link to="">
        <img src={githubLogo} alt="github logo" />
      </Link>
      <Link to="">
        <img src={googleLogo} alt="google logo" />
      </Link>
      <p>
        Already have an account?<Link to="/login">Log in</Link>
      </p>
    </div>
  );
}

export default SignUpFormPage;
