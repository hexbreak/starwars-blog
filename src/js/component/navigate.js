import React from "react";
import { Link } from "react-router-dom";

export const Navigate = () => {
	return (
		<div className="container">
			<nav className="navbar mb-3" style={{ height: "50rem" }}>
				<ul className="navbar-nav">
					<li className="nav-item">
						<a className="nav-link text-light" href="#">
							CHARACTERS
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link text-light" href="#">
							PLANETS
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link text-light" href="#">
							STARSHIPS
						</a>
					</li>
				</ul>
			</nav>
		</div>
	);
};
