import React, { useState, useEffect } from "react";
import getState from "./flux.js";

// Don't change, here is where we initialize our context, by default it's just going to be null.
export const Context = React.createContext(null);
// we create an object based on this component, it is mandatory! We are using an object based on the Context API. It can be anything we want, myContext, TheContext, MyData - it doesn't matter. Best to keep it simple to understand. Be consistent!

// This function injects the global store to any view/component where you want to use it, we will inject the context to layout.js, you can see it here:
// https://github.com/4GeeksAcademy/react-hello-webapp/blob/master/src/js/layout.js#L35
const injectContext = PassedComponent => {
	// our StoreWrapper holds our global state.
	const StoreWrapper = props => {
		// This will be passed as the contenxt value
		const [state, setState] = useState(
			// ^ state holds everything, it is the main state.
			// When you want to use the store, use the import for Context & line 14 to make the magic happen.
			getState({
				// this function is coming from flux.js
				getStore: () => state.store,
				getActions: () => state.actions,
				setStore: updatedStore =>
					setState({
						store: Object.assign(state.store, updatedStore),
						actions: { ...state.actions }
					})
			})
		);
		// a function can either call an action or call a result.
		useEffect(() => {
			state.actions.loadSomeData(); // calling this function from the flux.js actions
		}, []);

		// The initial value for the context is not null anymore, but the current state of this component,
		// the context will now have a getStore, getActions and setStore functions available, because they were declared
		// on the state of this component
		return (
			// This tag comes from the ContextAPI which is Context.Provider, which does all the heavy work. The state
			<Context.Provider value={state}>
				<PassedComponent {...props} />
				{/* Context provider is going to provide the state in line 12, in a prop, to any component that gets hooked to this component later. */}
			</Context.Provider>
		);
	};
	return StoreWrapper;
};

export default injectContext;
