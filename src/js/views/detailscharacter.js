import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const DetailsCharacter = props => {
	return (
		<div className="container text-white">
			<div className="main-page">character test</div>
			<div className="row">
				<div className="col-md-2">character test 2</div>
				<div className="col-md-2">character test 3</div>
				<div className="col-md-2">character test 4</div>
			</div>
		</div>
	);
};

DetailsCharacter.propTypes = {
	character: PropTypes.object
};
