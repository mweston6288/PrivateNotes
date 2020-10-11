import React, {useState} from "react";
import Container from "react-bootstrap/Container";
import Note from "./Note.js"
import axios from "axios";
import {useSavedNotesContext} from "../../utils/SavedNotesContext";
function SavedNotes() {

	const [NotesContext, dispatch] = useSavedNotesContext();
	const [Notes, setNotes] = useState([]);
	if (NotesContext.updateNeeded){
		axios.get("/api/notes").then((response) => {

			setNotes(response.data);
			dispatch({type:"false"});
		})
	};

	return(
		<Container>
			<div>
				{Notes.map((note) => (
					<Note Title={note.Title} Body={note.Body} />
				))}
			</div>
		</Container>
	)
}

export default SavedNotes;


