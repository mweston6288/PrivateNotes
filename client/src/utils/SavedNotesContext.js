/**
 * Context file that stores data on the SavedNotes component.
 * 
 * notes: an array. Stores all notes objects retrieved from the database.
 * category: a string. The active category
 */

import React, { useReducer, useContext, createContext } from "react";
import Sort from "fast-sort"
const SavedNotesContext = createContext();
const { Provider } = SavedNotesContext;

const reducer = (state, action) => {
	switch(action.type){
	// add a new note to the front of notes. Used when a new note is created
	case "addNew":
		// add an empty Categories field so that
		// Note.js doesn't crash when accessing an undefined field
		action.newNote.Categories = [];
		state.notes.unshift(action.newNote);
		return ({...state});
	// add multiple notes. Used after user logs in and their notes are retireved
	case "add":
		return({...state, notes: action.data});
	// sort notes. Used by SortButton
	case "sort":
		if (action.sortBy === "reverseUpdatedAt"){
			Sort(state.notes).desc("updatedAt");
		}else
			Sort(state.notes).asc(action.sortBy);
		return({...state});
	// change category to all
	case "all":
		return ({ ...state, category: "all" });
	// change category to a user-made category
	case "category":
		return ({ ...state, category: action.data });
	// add a category to a note
	case "updateCategory":
		state.notes[action.index].Categories.push(action.category)
		return ({...state})
	// remove a note and replace it with an updated version
	// used when user updates a note
	case "updateNote":{
		// Copy the categories from the old note into the new version
		action.data.Categories = state.notes[action.index].Categories.slice(0);
		// remove old version. add new one
		state.notes.splice(action.index,1)
		state.notes.unshift(action.data)
		return ({ ...state })
	}
	// Delete a note from the array
	case "delete":{
		state.notes.splice(action.index, 1)
		return ({ ...state })
	}
	// reset context. Used when user logs out
	case"reset":{
		return ({ ...state, notes:[], category:"all" })

	}
	default:
		return ({...state});

	}
};


// default state of the context
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
