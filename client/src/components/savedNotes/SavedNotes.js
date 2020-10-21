/**
 * Primary component for the saved Notes window
 * When needed, it makes a GET request for notes and then 
 * creates a Note component for each received note
 */

import React, {useState} from "react";
import Container from "react-bootstrap/Container";
import Note from "./Note.js"
import axios from "axios";
import {useSavedNotesContext} from "../../utils/SavedNotesContext";
function SavedNotes() {

	const [NotesContext, dispatch] = useSavedNotesContext();
	const [Notes, setNotes] = useState([]);
	// Make an API call whenever the database updates
	if (NotesContext.updateNeeded){
		axios.get("/api/notes").then((response) => {

			setNotes(response.data);
			dispatch({type:"false"});
		})
	};

	return(
		<Container>
			<div>
				{/* For every note in Notes, create a Note object */}
				{Notes.map((note) => (
					<Note Title={note.Title} Body={note.Body} />
				))}
			</div>
		</Container>
	)
}

export default SavedNotes;


