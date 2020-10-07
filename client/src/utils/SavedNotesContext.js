import React, { useReducer, useContext, createContext } from "react";
import axios from "axios";

const SavedNotesContext = createContext();
const { Provider } = SavedNotesContext;
// update authentication status, username, and userID
// TODO: Make a sign out condition that resets everything
const reducer = (state, action) => {
	console.log(action.type);
	switch(action.type){
		case "true":
			return ({updateNeeded: true});
		default:
			return ({ updateNeeded: false });

	}
}

// Stores the currently selected armor for users
const SavedNotesProvider = ({ value = [], ...props }) => {
	const [state, dispatch] = useReducer(reducer, {
		updateNeeded: true
	});
	return <Provider value={[state, dispatch]}{...props} />
}
const useSavedNotesContext = () => {
	return useContext(SavedNotesContext);
};
export { SavedNotesProvider, useSavedNotesContext };
