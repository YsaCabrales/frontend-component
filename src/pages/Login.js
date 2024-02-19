import React, { useState } from "react";
import "./styles/Login.css";
import { useLogin } from "../hooks/useLogin";

const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const { login, error, isLoading } = useLogin();

	const handleSubmit = async (e) => {
		e.preventDefault();

		await login(username, password);
	};

	return (
		<div id="login-container">
			<div id="box">
				<form className="login" onSubmit={handleSubmit}>
					<h3>Sign in to your Account</h3>
					<label>Username: </label>
					<input type="text" onChange={(e) => setUsername(e.target.value)} value={username} />

					<br />

					<label>Password: </label>
					<input type="password" onChange={(e) => setPassword(e.target.value)} value={password} />

					<br />

					<button id="login-button" disabled={isLoading}>Login</button>
					{error && <div className="error">{error}</div>}
				</form>
			</div>
		</div>
	);
};

export default Login;
