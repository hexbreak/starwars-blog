import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

// create the cards with props
// CTRL forward slash ( / ) for comment

export const CardPlanet = props => {
	return (
		<div className="card bg-secondary mb-2" style={{ width: "18rem" }}>
			<img className="card-img-top" src="..." alt="Card image cap" />
			<div className="card-body">
				<h5 className="card-title">{props.planet.name}</h5>
				<p className="card-text" />
				<a href="#" className="btn bg-danger">
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
