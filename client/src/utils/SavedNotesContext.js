import React, { useReducer, useContext, createContext } from "react";

const SavedNotesContext = createContext();
const { Provider } = SavedNotesContext;

const reducer = (state, action) => {
	switch(action.type){
	case "addNew":
		state.notes.push(action.newNote);
		return ({...state});
	case "add":
		return({...state, notes: action.data});
	default:
		return ({...state});

	}
};


// eslint-disable-next-line no-unused-vars
const SavedNotesProvider = ({ value = [], ...props }) => {
	const [state, dispatch] = useReducer(reducer, {
		notes:[]
	});
	return <Provider value={[state, dispatch]}{...props} />;
};
const useSavedNotesContext = () => {
	return useContext(SavedNotesContext);
};
export { SavedNotesProvider, useSavedNotesContext };
