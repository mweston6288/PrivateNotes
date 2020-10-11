import React, { useReducer, useContext, createContext } from "react";
import axios from "axios";

const SavedNotesContext = createContext();
const { Provider } = SavedNotesContext;

const reducer = (state, action) => {
	switch(action.type){
		case "true":
			return ({updateNeeded: true});
		default:
			return ({ updateNeeded: false });

	}
}


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
