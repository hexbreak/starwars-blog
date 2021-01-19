import React, { useState, useEffect } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { CardCharacter } from "../component/cardcharacter.js";
import { CardPlanet } from "../component/cardplanet.js";
import { CardStarship } from "../component/cardstarship.js";

// { property : object }
export function Home() {
	const [theCharacters, setCharacters] = useState([{ name: "Luke Skywalker" }, { name: "Obi-Wan Kenobi" }]);
	const [thePlanets, setPlanets] = useState([{ name: "Planet 1" }, { name: "Planet 2" }]);
	const [theStarships, setStarships] = useState([{ name: "Starship 1" }, { name: "Starship 2" }]);

	return (
		<div className="container- d-flex justify-content-center mt-5 row">
			<div>
				<h1>Characters</h1>
				{theCharacters.map((value, index) => {
					return <CardCharacter key={index} character={value} />;
				})}
			</div>
			<div>
				<h1>Planets</h1>
				{thePlanets.map((value, index) => {
					return <CardPlanet key={index} planet={value} />;
				})}
			</div>
			<div>
				<h1>Starships</h1>
				{theStarships.map((value, index) => {
					return <CardStarship key={index} starship={value} />;
				})}
			</div>
		</div>
	);
}

// this this main page to map/display our bootstrap cards.
