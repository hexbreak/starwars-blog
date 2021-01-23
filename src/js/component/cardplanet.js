import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import planetImage from "../../img/planet_img.jpeg";

// create the cards with props
// CTRL forward slash ( / ) for comment

export const CardPlanet = props => {
	return (
		<div className="card bg-dark text-white mb-1 mr-1 shadow-lg" style={{ width: "14rem" }}>
			<img className="card-img-top" src={planetImage} alt="Card image cap" />
			<div className="card-body">
				<h5 className="card-title text-center">{props.planet.name}</h5>
				<div className="card-text">
					<div className="text-family">Terrain: </div>
					{props.planet.terrain}
				</div>
				<Link to={"/detailsplanet/" + props.planet.id} className="btn btn-sm bg-danger">
					databank
				</Link>
			</div>
		</div>
	);
};

CardPlanet.propTypes = {
	planet: PropTypes.object
};

// make separate files for each card/component for easy tracking of coding
