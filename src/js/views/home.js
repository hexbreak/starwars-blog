import React, { useState, useEffect } from "react";
import "../../styles/home.scss";
import { CardCharacter } from "../component/cardcharacter.js";
import { CardPlanet } from "../component/cardplanet.js";
import { CardStarship } from "../component/cardstarship.js";
import { LukeIMG } from "../../img/luke_img.jpeg";

export function Home() {
	const [theCharacters, setCharacters] = useState([
		{ name: "Luke Skywalker" },
		{ name: "C-3PO" },
		{ name: "R2-D2" },
		{ name: "Darth Vader" },
		{ name: "Leia Organa" }
	]);
	const [thePlanets, setPlanets] = useState([
		{ name: "Tatooine" },
		{ name: "Alderaan" },
		{ name: "Yavin IV" },
		{ name: "Hoth" },
		{ name: "Dagobah" }
	]);
	const [theStarships, setStarships] = useState([
		{ name: "CR90 corvette" },
		{ name: "Imperial I-class Star Destroyer" },
		{ name: "Sentinel-class landing craft" },
		{ name: "DS-1 Orbital Battle Station" },
		{ name: "YT-1300 light freighter" }
	]);
	return (
		<div className="container- d-flex justify-content-center mt-5">
			<div className="p-1">
				<h1>Characters</h1>
				{theCharacters.map((value, index) => {
					return <CardCharacter key={index} character={value} />;
				})}
			</div>
			<div className="p-1">
				<h1>Planets</h1>
				{thePlanets.map((value, index) => {
					return <CardPlanet key={index} planet={value} />;
				})}
			</div>
			<div className="p-1">
				<h1>Starships</h1>
				{theStarships.map((value, index) => {
					return <CardStarship key={index} starship={value} />;
				})}
			</div>
		</div>
	);
}

// this this main page to map/display our bootstrap cards.

// var variableName = "String Name"
/* const  variableName {  _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 
    propertyName: "stringName", // zero or more characters inside quotes    \
    propertyAge: 18,                                                         \__ Object
    propertyMarriage: false, // boolean syntax for true or false             /
    propertyPurchases: ["stringFood", "stringLaptop","stringSkateboard"] _ _/
}
*/
