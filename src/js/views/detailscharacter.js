import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import lukeImage from "../../img/luke_img.jpeg";
import { Context } from "../store/appContext";

export const DetailsCharacter = props => {
	const { store, actions } = useContext(Context);
	let { theid } = useParams();
	const singleCharacter = store.theCharacters.find(element => element.name === theid);
	const { name, birth_year, height, gender } = singleCharacter;
	console.log(props.test);

	return (
		<div className="container-fluid d-flex justify-content-center">
			<div className="card mb-3 bg-dark" style={{ maxWidth: "2000px" }}>
				<div className="row g-0 text-white">
					<div className="col-8">
						<img src={lukeImage} alt="Character Image" />
					</div>
					<div className="col-4">
						<div className="card-body">
							<div className="card-title">Name: {name}</div>
							<div className="card-text">Birth Dte goes here!</div>
							<div className="card-text">Class goes here!</div>
							<div className="card-text">More miscellaneous goes here!</div>
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
