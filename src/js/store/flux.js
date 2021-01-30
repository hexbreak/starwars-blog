// not a real component, just a function!
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favorites: [],
			theCharacters: [],
			thePlanets: [],
			theStarships: [],
			demo: [
				// this demo is available in the Context
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		// actions is your best friend in flux, use actions to use components as one.
		actions: {
			addFavorite: newItem => {
				// we create a new function addFavorite to make a favorite list of star wars database.
				var storeCopy = getStore();
				// we make a copy of storeCopy to manipulate it without the need of adjusting the main getState.
				var checkItem = storeCopy.favorites.find(value => {
					// we are searching for any value with similar names
					return value == newItem;
				});
				// we use if else statement to correctly display no more than one  of each value on newItem, only allow when item is not defined.
				if (checkItem == undefined) {
					// we are copying getStore to manipulate it in our favor without affecting the default store. Nothing in the real store has been changed.
					// map method, filter and find will be a mostly used in react. Filter loops the array. My filter is only going to keep the elements that pass the conditions.
					var newFavorites = storeCopy.favorites.concat(newItem);
					// changing stuff in te local copy. if we want to keep them then we assign the new change value of the store into the next one.
					// its essential to contact because contact does not change the original array. Push changes the original array, it deletes it!
					setStore({ favorites: newFavorites });
				}
			},
			// we create a new function to delete from the favorite list
			deleteFavorite: deletedItem => {
				var storeCopy = getStore();
				// instead of setting the first array with find, we use filter to find within the array the specific element we need in order to delete.
				var newFavorites = storeCopy.favorites.filter((value, index) => {
					// if the value is not equal we set it to deletedItem
					return value != deletedItem;
				});
				setStore({ favorites: newFavorites });
			},
			loadSomeData: () => {
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
						setStore({ theCharacters: responseAsJson.results });
						// because we are fetching information on "people" from SW. We are using the setState as SetCharacters
						/* We need an array with characters from a specific object. The specific properties value to take only the array for each character, like the url for /1/ is Luke Skywalker we need his info. So we will use the .notation inside the paranthesis after _ setCharacters(responseAsJson); _ with _ setCharacters(responseAsJson.results); _ to pull the object we need */
						// How can we test that the information we require works? use _ console.log(characters); _ results should be listing characters names from SW by order.
						// let's say we want to pull something specific from the array/object? _ setState(responseAsJson.results.index.eye_color); _ or very specific like luke skywalker _ setState(responseAsJson.results.index[1].eye_color); _ and we will get the only the eye color of luke skywalker instead of everyone from the code before.
					})
					.catch(function(error) {
						console.log("Looks like there was a problem: \n", error);
					});

				// we will now copy everything insde the useEffect for the thePlanets & theStarships.

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
						setStore({ thePlanets: responseAsJson.results });
					})
					.catch(function(error) {
						console.log("Looks like there was a problem: \n", error);
					});

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
						setStore({ theStarships: responseAsJson.results });
					})
					.catch(function(error) {
						console.log("Looks like there was a problem: \n", error);
					});
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
