import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import lukeImage from "../../img/luke_img.jpeg";
import { Context } from "../store/appContext";

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
				<Link
					to={{
						pathname: `/detailscharacter/${props.character.name}`
					}}
					className="btn btn-sm bg-danger">
					databank
				</Link>
				<button className="btn" onClick={e => actions.deleteFavorite(props.character.name)}>
					<i className="fab fa-galactic-republic fa-1x text-light" />
				</button>
				<button className="btn" onClick={e => actions.addFavorite(props.character.name)}>
					<i className="fab fa-galactic-senate fa-2x text-white text-right" />
				</button>
			</div>
		</div>
	);
};

CardCharacter.propTypes = {
	character: PropTypes.object,
	index: PropTypes.number
};
