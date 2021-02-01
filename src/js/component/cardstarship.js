import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import starshipImage from "../../img/starship_img.jpeg";

export const CardStarship = props => {
	const { store, actions } = useContext(Context);
	return (
		<div className="card bg-dark text-white mb-1 mr-1 shadow-lg" style={{ width: "14rem" }}>
			<img className="card-img-top" src={starshipImage} alt="Card image cap" />
			<div className="card-body">
				<h5 className="card-title text-center">{props.starship.name}</h5>
				<div className="card-text">
					<div className="text-family">Manufacturer: </div>
					{props.starship.manufacturer}
				</div>
				<Link
					to={{
						pathname: `/detailsstarship/${props.starship.name}`
					}}
					className="btn btn-sm bg-danger">
					databank
				</Link>
				<button className="btn" onClick={e => actions.deleteFavorite(props.starship.name)}>
					<i className="fab fa-galactic-republic fa-1x text-light" />
				</button>
				<button className="btn" onClick={e => actions.addFavorite(props.starship.name)}>
					<i className="fab fa-galactic-senate fa-2x text-white text-right" />
				</button>
			</div>
		</div>
	);
};

CardStarship.propTypes = {
	starship: PropTypes.object
};
