import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import lukeImage from "../../img/luke_img.jpeg";

export const DetailsCharacter = props => {
	return (
		<div className="container-fluid d-flex justify-content-center">
			<div className="card mb-3" style={{ maxWidth: "1000px" }}>
				<div className="row g-0">
					<div className="col-md-4">
						<img src="..." alt="..." />
					</div>
					<div className="col-md-8">
						<div className="card-body">
							<h5 className="card-title">Card title</h5>
							<div className="card-text">
								This is a wider card with supporting text below as a natural lead-in to additional
								content. This content is a little bit longer.
							</div>
							<div className="card-text">
								<div className="text-muted">Last updated 3 mins ago</div>
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
