import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import lukeImage from "../../img/luke_img.jpeg";
import { Context } from "../store/appContext";

export const DetailsCharacter = props => {
	const { store, actions } = useContext(Context);
	return (
		<div className="container-fluid d-flex justify-content-center">
			<div className="card mb-3 bg-dark" style={{ maxWidth: "1000px" }}>
				<div className="row g-0 text-white">
					<div className="col-md-4">
						<img src={lukeImage} alt="Character Image" />
					</div>
					<div className="col-md-8">
						<div className="card-body">
							<div className="card-title">Name: {props.location.character.name}</div>
							<div className="card-text">
								This is a wider card with supporting text below as a natural lead-in to additional
								content. This content is a little bit longer.
							</div>
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
	location: PropTypes.object
};
