import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import lukeImage from "../../img/luke_img.jpeg";

// create the cards with props
// CTRL forward slash ( / ) for comment

export const CardPlanet = props => {
	return (
		<div className="card bg-secondary mb-1 mr-1 shadow-lg" style={{ width: "14rem" }}>
			<img className="card-img-top" src={lukeImage} alt="Card image cap" />
			<div className="card-body">
				<h5 className="card-title text-center">{props.planet.name}</h5>
				<p className="card-text">Terrain: {props.planet.terrain}</p>
				<a href="#" className="btn btn-sm bg-danger">
					databank
				</a>
			</div>
		</div>
	);
};

CardPlanet.propTypes = {
	planet: PropTypes.object
};

// make separate files for each card/component for easy tracking of coding
