import React, { useState, useEffect } from "react";
import "../../styles/home.scss";
import { CardCharacter } from "../component/cardcharacter.js";
import { CardPlanet } from "../component/cardplanet.js";
import { CardStarship } from "../component/cardstarship.js";
import { LukeIMG } from "../../img/luke_img.jpeg";

export function Home() {
	const [theCharacters, setCharacters] = useState([]);
	const [thePlanets, setPlanets] = useState([]);
	const [theStarships, setStarships] = useState([]);

	useEffect(() => {
		fetch("https://swapi.dev/api/people/")
			.then(function(response) {
				if (!response.ok) {
					// if the response is good, it will avoid showing the error. If the response is NOT okay it will show up.
					throw Error(response.statusText);
				}
				// Read the response as json.
				return response.json();
			})
			.then(function(responseAsJson) {
				// Do stuff with the JSON
				setCharacters(responseAsJson.results);
				// because we are fetching information on "people" from SW. We are using the setState as SetCharacters
				/* We need an array with characters from a specific object. The specific properties value to take only the array for each character, like the url for /1/ is Luke Skywalker we need his info. So we will use the .notation inside the paranthesis after _ setCharacters(responseAsJson); _ with _ setCharacters(responseAsJson.results); _ to pull the object we need */
				// How can we test that the information we require works? use _ console.log(characters); _ results should be listing characters names from SW by order.
				// let's say we want to pull something specific from the array/object? _ setState(responseAsJson.results.index.eye_color); _ or very specific like luke skywalker _ setState(responseAsJson.results.index[1].eye_color); _ and we will get the only the eye color of luke skywalker instead of everyone from the code before.
			})
			.catch(function(error) {
				console.log("Looks like there was a problem: \n", error);
			});
	}, []);

	// we will now copy the entire useEffect for the thePlanets & theStarships.

	useEffect(() => {
		fetch("https://swapi.dev/api/planets/")
			.then(function(response) {
				if (!response.ok) {
					throw Error(response.statusText);
				}
				// Read the response as json.
				return response.json();
			})
			.then(function(responseAsJson) {
				// Do stuff with the JSON
				setPlanets(responseAsJson.results);
			})
			.catch(function(error) {
				console.log("Looks like there was a problem: \n", error);
			});
	}, []);

	useEffect(() => {
		fetch("https://swapi.dev/api/starships/")
			.then(function(response) {
				if (!response.ok) {
					throw Error(response.statusText);
				}
				// Read the response as json.
				return response.json();
			})
			.then(function(responseAsJson) {
				// Do stuff with the JSON
				setStarships(responseAsJson.results);
			})
			.catch(function(error) {
				console.log("Looks like there was a problem: \n", error);
			});
	}, []);

	return (
		<div className="container align-items-center">
			<h2 className="h2">characters</h2>
			<div className="row">
				{theCharacters.map((value, index) => {
					return <CardCharacter key={index} character={value} />;
				})}
			</div>
			<h2 className="h2">planets</h2>
			<div className="row">
				{thePlanets.map((value, index) => {
					return <CardPlanet key={index} planet={value} />;
				})}
			</div>
			<h2 className="h2">starships</h2>
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
