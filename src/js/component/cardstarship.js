import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

// create the cards with props
// CTRL / for comment

export const CardStarship = props => {
	return (
		<div className="card bg-secondary" style={{ width: "18rem" }}>
			<img className="card-img-top" src="..." alt="Card image cap" />
			<div className="card-body pr-5">
				<h5 className="card-title">{props.starship.name}</h5>
				<p className="card-text" />
				<a href="#" className="btn bg-danger">
					databank
				</a>
			</div>
		</div>
	);
};

CardStarship.propTypes = {
	starship: PropTypes.object
};

// make separate files for each card/component for easy tracking of coding
