import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import lukeImage from "../../img/luke_img.jpeg";
import { Context } from "../store/appContext";

export const DetailsCharacter = props => {
	const { store, actions } = useContext(Context);
	let { theid } = useParams();
	const singleCharacter = store.theCharacters.find(element => element.name === theid);
	const { name, birth_year, height, gender, mass } = singleCharacter;
	console.log(singleCharacter);

	return (
		<div className="container-fluid d-flex justify-content-center">
			<div className="card mb-3 bg-dark" style={{ maxWidth: "2000px" }}>
				<div className="row g-0 text-white">
					<div className="col-9">
						<img src={lukeImage} alt="Character Image" />
					</div>
					<div className="col-3">
						<div className="card-body">
							<div className="card-title">Name: {name}</div>
							<div className="card-text">Birth Year: {birth_year}</div>
							<div className="card-text">Gender: {gender}</div>
							<div className="card-text">Height: {height}</div>
							<div className="card-text">Mass: {mass}</div>
							<div className="card-text">
								<div className="text-muted">Go Back Button will go here!</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

DetailsCharacter.propTypes = {
	test: PropTypes.string
};
