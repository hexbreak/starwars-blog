import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.scss";
import { CardCharacter } from "../component/cardcharacter.js";
import { CardPlanet } from "../component/cardplanet.js";
import { CardStarship } from "../component/cardstarship.js";
import { Navigate } from "../component/navigate.js";
import { Context } from "../store/appContext";

export function Home() {
	const { store, actions } = useContext(Context);

	return (
		<div className="container align-items-center">
			<h3 className="h3">&#47;&#47; characters</h3>
			<div className="row">
				{/* We want to map theCharacters array so we use DOT map, for every element in characters
                we want to have inside is an arrow function for the return.
                    the parameters for the mapping function is the same (value, index). In this case we use,
                    characters for each value and the index for each index in the array.
                 */}
				{store.theCharacters.map((value, index) => {
					return <CardCharacter key={index} character={value} />;
					// our CardCharacter needs to show the details, so we need to pass props with the details.
					// We create a prop called character and the value comes from the parameter above in line with map
					// Whenever we map we always have to remember that the first HTML tag in the return needs to include a key attribute. We need a key attribute
				})}
			</div>
			<h3 className="h3">&#47;&#47; planets</h3>
			<div className="row">
				{store.thePlanets.map((value, index) => {
					return <CardPlanet key={index} planet={value} />;
				})}
			</div>
			<h3 className="h3">&#47;&#47; starships</h3>
			<div className="row">
				{store.theStarships.map((value, index) => {
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
