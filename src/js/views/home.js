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

	useEffect(() => {
		fetch("https://swapi.dev/api/people/")
			.then(function(response) {
				if (!response.ok) {
					throw Error(response.statusText);
				}
				// Read the response as json.
				return response.json();
			})
			.then(function(responseAsJson) {
				// Do stuff with the JSON
				setCharacters(responseAsJson.results);
				// because we are fetching information on "people" from SW. We are using the setState as SetCharacters
				/* We need an array with characters inside the object. The specific properties value to take only the array for each character, like the url for /1/ is Luke Skywalker we need his info. 
                    so we will use the .notation inside the paranthesis */
			})
			.catch(function(error) {
				console.log("Looks like there was a problem: \n", error);
			});
	}, []);

	return (
		<div className="container align-items-center">
			<h1 className="h1 text-center">Test!</h1>
			<div className="row">
				{theCharacters.map((value, index) => {
					return <CardCharacter key={index} character={value} />;
				})}
			</div>
			<div className="row">
				{thePlanets.map((value, index) => {
					return <CardPlanet key={index} planet={value} />;
				})}
			</div>
			<div className="row">
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
