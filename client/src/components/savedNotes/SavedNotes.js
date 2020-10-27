/**
 * Primary component for the saved Notes window
 * When needed, it makes a GET request for notes and then 
 * creates a Note component for each received note
 */

import React, {useState} from "react";
import Container from "react-bootstrap/Container";
import Note from "./Note.js";
import axios from "axios";
import {useSavedNotesContext} from "../../utils/SavedNotesContext";
import { useUserContext } from "../../utils/UserContext";

function SavedNotes() {
	const [user] = useUserContext();
	const [{notes}] = useSavedNotesContext();


	return(
		<Container>
			<div>
				{/* For every note in Notes, create a Note object */}
				{notes.map((note) => (
					<Note key={note.id} Title={note.Title} Body={note.Body} />
				))}
			</div>
		</Container>
	);
}

export default SavedNotes;


