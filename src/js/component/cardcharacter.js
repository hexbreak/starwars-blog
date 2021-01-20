import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import lukeImage from "../../img/luke_img.jpeg";

// create the cards with props
// CTRL / for comment

export const CardCharacter = props => {
	return (
		<div className="card bg-secondary mb-1 mr-1 shadow-lg" style={{ width: "14rem" }}>
			<img className="card-img-top" src={lukeImage} alt="Card image cap" />
			<div className="card-body">
				<h5 className="card-title text-center">{props.character.name}</h5>
				<p className="card-text" />
				<a href="#" className="btn btn-sm bg-danger">
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
