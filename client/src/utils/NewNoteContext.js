/**
 * Context file that stores data on the NewNote component.
 * If user is writing a new note, noteId and activeIndex are blank.
 * If user is editing a previously saved note, noteId and activeIndex 
 * are used to keep track of and update the note
 *
 * title: a string. Stores the value in the newNote title text field
 * body: a string. Sotres the value in the NewNote body text field
 * noteId: a number. If field is blank, SaveButton creates a new note in the database. 
 * 		Otherwise, it updates the note whose id matches noteId
 * activeIndex:a number. tracks which index in SavedNotesContext.notes is the current note
 * 		If this is an entirely new note, this field is blank
 */
import React, { useReducer, useContext, createContext } from "react";

const NewNoteContext = createContext();
const { Provider } = NewNoteContext;

const reducer = (state, action) => {
	switch (action.type) {
		// update title text field
		case "title":
			return ({ ...state, title: action.data });
		// update body text field
		case "body":
			return ({ ...state, body: action.data});
		// replace the context with the details of a saved note
		// used when user attempts to edit a note
		case "update":
			return ({ ...state, title: action.data.title, body: action.data.body, noteId: action.data.notesId, activeIndex:action.index})
		// reset context. Used when user saves a note
		case "reset":
			return({...state, title:"", body:"", noteId:"", activeIndex:""})
		default:
			return ({ ...state });

	}
};


// default state of the context
const NewNoteProvider = ({ value = [], ...props }) => {
	const [state, dispatch] = useReducer(reducer, {
		title:"",
		body:"",
		noteId:"",
		activeIndex:""
	});
	return <Provider value={[state, dispatch]}{...props} />;
};
const useNewNoteContext = () => {
	return useContext(NewNoteContext);
};
export { NewNoteProvider, useNewNoteContext };
