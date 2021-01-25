import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import lukeImage from "../../img/luke_img.jpeg";
import { Context } from "../store/appContext";

// create the cards with props
// CTRL forward slash ( / ) for comment

export const CardCharacter = props => {
	const { store, actions } = useContext(Context);
	return (
		<div className="card bg-dark text-white mb-1 mr-1 shadow-lg" style={{ width: "14rem" }}>
			<img className="card-img-top" src={lukeImage} alt="Card image cap" />
			<div className="card-body">
				<h5 className="card-title text-center">{props.character.name}</h5>
				<div className="card-text">
					<div className="text-family">Birth Year:</div>
					{props.character.birth_year}
				</div>
				<Link to={"/detailscharacter/" + props.character.id} className="btn btn-sm bg-danger">
					databank
				</Link>
				{/* We will use an onclick event with conditional rendering. */}
				<button className="btn btn-sm bg-info" onClick={e => actions.addFavorite(props.character.name)}>
					Add favorite
				</button>
				<button className="btn btn-sm bg-info" onClick={e => actions.deleteFavorite(props.character.name)}>
					Delete
				</button>
			</div>
		</div>
	);
};

CardCharacter.propTypes = {
	character: PropTypes.object
};

// make separate files for each card/component for easy tracking of coding
