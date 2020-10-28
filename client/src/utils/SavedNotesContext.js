import React, { useReducer, useContext, createContext } from "react";
import Sort from "fast-sort"
const SavedNotesContext = createContext();
const { Provider } = SavedNotesContext;

const reducer = (state, action) => {
	switch(action.type){
	case "addNew":
		state.notes.push(action.newNote);
		return ({...state});
	case "add":
		return({...state, notes: action.data});
	case "sort":
		if (action.sortBy === "reverseUpdatedAt"){
			Sort(state.notes).desc("updatedAt");

		}else
			Sort(state.notes).asc(action.sortBy);
		return({...state});
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
