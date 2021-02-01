import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import starshipImage from "../../img/starship_img.jpeg";

export const DetailsStarship = () => {
	const { store, actions } = useContext(Context);
	let { theid } = useParams();
	const singleStarship = store.theStarships.find(element => element.name === theid);
	const { name, manufacturer, model, cost_in_credits, hyperdrive_rating } = singleStarship;
	console.log(singleStarship);

	return (
		<div className="container-fluid d-flex justify-content-center">
			<div className="card mb-3 bg-dark" style={{ maxWidth: "2000px" }}>
				<div className="row g-0 text-white">
					<div className="col-9">
						<img src={starshipImage} alt="Planet Image" />
					</div>
					<div className="col-3">
						<div className="card-body">
							<div className="h3 card-title text-center">{name}</div>
							<div className="card-text">Manufacturer: {manufacturer}</div>
							<div className="card-text">Model: {model}</div>
							<div className="card-text">Cost in Credits: {cost_in_credits}</div>
							<div className="card-text">Hyperdrive Rating: {hyperdrive_rating}</div>
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
