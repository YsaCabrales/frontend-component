import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

const Navbar = () => {
	const { logout } = useLogout();
	const { user } = useAuthContext();

	const handleClick = () => {
		logout();
	};

	return (
		<nav className="navbar">
			<h1>OneCodeCamp Blog</h1>
			<div className="links">
				<Link to="/">Home</Link>
				{user && (
					<div>
						<Link to="/create">New Blog</Link>
						<Link onClick={handleClick}>Logout</Link>
						<span>{user.username}</span>
					</div>
				)}
			</div>
			{!user && (
				<div>
					<Link to="/login">Login</Link>
					<Link to="/register">Register</Link>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
