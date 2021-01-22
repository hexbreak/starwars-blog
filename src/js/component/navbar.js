import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar bg-dark mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1 text-white">STAR WARS DATABANK // PREVIEW</span>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn bg-secondary text-white">Check the Context in action</button>
				</Link>
			</div>
		</nav>
	);
};
