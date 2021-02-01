import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar bg-dark mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1 text-white">STAR WARS DATABANK // PREVIEW</span>
			</Link>
			<div className="ml-auto">
				<div className="btn-group dropleft">
					<button
						type="button"
						className="btn btn-secondary dropdown-toggle"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false">
						Favorites {store.favorites.length}
					</button>
					<div className={store.favorites.length > 0 ? "dropdown-menu show" : "d-none"}>
						{store.favorites.map((item, index) => {
							return (
								<li className="dropdown-item" key={index}>
									{item}
								</li>
							);
						})}
					</div>
				</div>
			</div>
		</nav>
	);
};
