import React, { useReducer, useContext, createContext } from "react";
import Sort from "fast-sort"
const SavedNotesContext = createContext();
const { Provider } = SavedNotesContext;

const reducer = (state, action) => {
	switch(action.type){
	case "addNew":
		action.newNote.Categories = [];
		state.notes.unshift(action.newNote);
		return ({...state});
	case "add":
		return({...state, notes: action.data});
	case "sort":
		if (action.sortBy === "reverseUpdatedAt"){
			Sort(state.notes).desc("updatedAt");
		}else
			Sort(state.notes).asc(action.sortBy);
		return({...state});
	case "all":
		return ({ ...state, category: "all" });

	case "category":
		return ({ ...state, category: action.data });
	case "updateCategory":
		state.notes[action.index].Categories.push(action.category)
		return ({...state})
	case "updateNote":{
		action.data.Categories = [];

		state.notes.splice(action.index,1)
		state.notes.unshift(action.data)
		return ({ ...state })
	}
	case"reset":{
		return ({ ...state, notes:[], category:"all" })

	}
	default:
		return ({...state});

	}
};


// eslint-disable-next-line no-unused-vars
const SavedNotesProvider = ({ value = [], ...props }) => {
	const [state, dispatch] = useReducer(reducer, {
		notes:[],
		category: "all"
	});
	return <Provider value={[state, dispatch]}{...props} />;
};
const useSavedNotesContext = () => {
	return useContext(SavedNotesContext);
};
export { SavedNotesProvider, useSavedNotesContext };
