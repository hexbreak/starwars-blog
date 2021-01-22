import React from "react";
import { Link } from "react-router-dom";

export const Navigate = () => {
	return (
		<div className="container">
			<nav className="navbar navbar-light bg-dark mb-3">
				<ul className="navbar-nav">
					<li className="nav-item">
						<a className="nav-link" href="#">
							Link 1
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
							Link 2
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
							Link 3
						</a>
					</li>
				</ul>
			</nav>
		</div>
	);
};
