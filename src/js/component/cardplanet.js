import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import planetImage from "../../img/planet_img.jpeg";

export const CardPlanet = props => {
	const { store, actions } = useContext(Context);
	return (
		<div className="card bg-dark text-white mb-1 mr-1 shadow-lg" style={{ width: "14rem" }}>
			<img className="card-img-top" src={planetImage} alt="Card image cap" />
			<div className="card-body">
				<h5 className="card-title text-center">{props.planet.name}</h5>
				<div className="card-text">
					<div className="text-family">Terrain: </div>
					{props.planet.terrain}
				</div>
				<Link
					to={{
						pathname: `/detailsplanet/${props.planet.name}`
					}}
					className="btn btn-sm bg-danger">
					databank
				</Link>
				<button className="btn" onClick={e => actions.deleteFavorite(props.planet.name)}>
					<i className="fab fa-galactic-republic fa-1x text-light" />
				</button>
				<button className="btn" onClick={e => actions.addFavorite(props.planet.name)}>
					<i className="fab fa-galactic-senate fa-2x text-white text-right" />
				</button>
			</div>
		</div>
	);
};

CardPlanet.propTypes = {
	planet: PropTypes.object
};
