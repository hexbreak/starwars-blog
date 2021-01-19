import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

// create the cards with props
// CTRL / for comment

export const CardCharacter = props => {
	return (
		<div className="card bg-secondary" style={{ width: "18rem" }}>
			<img className="card-img-top" src="..." alt="Card image cap" />
			<div className="card-body">
				<h5 className="card-title">{props.character.name}</h5>
				<p className="card-text" />
				<a href="#" className="btn bg-danger">
					databank
				</a>
			</div>
		</div>
	);
};

CardCharacter.propTypes = {
	character: PropTypes.object
};

// make separate files for each card/component for easy tracking of coding
