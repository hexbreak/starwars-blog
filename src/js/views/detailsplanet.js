import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import planetImage from "../../img/planet_img.jpeg";

export const DetailsPlanet = () => {
	const { store, actions } = useContext(Context);
	let { theid } = useParams();
	const singlePlanet = store.thePlanets.find(element => element.name === theid);
	const { name, population, terrain, orbital_period, gravity } = singlePlanet;
	console.log(singlePlanet);

	return (
		<div className="container-fluid d-flex justify-content-center">
			<div className="card mb-3 bg-dark" style={{ maxWidth: "2000px" }}>
				<div className="row g-0 text-white">
					<div className="col-9">
						<img src={planetImage} alt="Planet Image" />
					</div>
					<div className="col-3">
						<div className="card-body">
							<div className="h3 card-title text-center">{name}</div>
							<div className="card-text">Population: {population}</div>
							<div className="card-text">Terrain: {terrain}</div>
							<div className="card-text">Orbital Period: {orbital_period}</div>
							<div className="card-text">Gravity: {gravity}</div>
							<div className="card-text align-bottom">
								<Link to="/">
									<div className="text-muted">Go Back Button will go here!</div>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
