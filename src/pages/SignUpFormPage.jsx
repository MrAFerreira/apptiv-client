import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/auth.context';
import axios from 'axios';
import appleLogo from '../assets/images/icon-park_apple.svg';
import githubLogo from '../assets/images/icon-park_github-one.svg';
import googleLogo from '../assets/images/icon-park_google.svg';

console.log(process.env.REACT_APP_BASE_URL)

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
				console.log(response);
				storeToken(response.data.authToken);
				autenticateUser();
				navigate('/event-list');
			})
			.catch((err) => {
				setErrorMessage(err.response.data.errorMessage);
			});
	};

	return (
		<div>
			<h1>Sign Up</h1>
			<form onSubmit={handleSubmit}>
				<label htmlFor="username">Username*</label>
				<input type="text" placeholder="John Doe" value={username} name="username" onChange={handleUsername} />

				<label htmlFor="email">Email address*</label>
				<input type="email" placeholder="example@email.com" value={email} name="email" onChange={handleEmail} />

				<label htmlFor="password">Password*</label>
				<input type="password" value={password} name="password" onChange={handlePassword} />

				<button type="submit">Continue</button>
			</form>
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
				Already have an acount?<Link to="/login">Log in</Link>
			</p>
		</div>
	);
}

export default SignUpFormPage;
