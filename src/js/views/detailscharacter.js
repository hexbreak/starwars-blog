import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import lukeImage from "../../img/luke_img.jpeg";

export const DetailsCharacter = () => {
	const { store, actions } = useContext(Context);
	let { theid } = useParams();
	const singleCharacter = store.theCharacters.find(element => element.name === theid);
	const { name, birth_year, height, eye_color, mass } = singleCharacter;

	return (
		<div className="container-fluid d-flex justify-content-center">
			<div className="card mb-3 bg-dark" style={{ maxWidth: "2000px" }}>
				<div className="row g-0 text-white">
					<div className="col-9">
						<img src={lukeImage} alt="Character Image" />
					</div>
					<div className="col-3">
						<div className="card-body">
							<div className="h3 card-title text-center">{name}</div>
							<div className="card-text">Birth Year: {birth_year}</div>
							<div className="card-text">Eye Color: {eye_color}</div>
							<div className="card-text">Height: {height}</div>
							<div className="card-text">Mass: {mass}</div>
							<div className="card-text align-bottom" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
