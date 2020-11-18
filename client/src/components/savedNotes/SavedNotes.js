/**
 * Primary component for the saved Notes window
 * When needed, it makes a GET request for notes and then 
 * creates a Note component for each received note
 * 
 * This is the super-component to Note, and SortButton
 */

import React from "react";
import axios from "axios";
import Note from "./Note.js";
import SortButton from "./SortButton"
import {useSavedNotesContext} from "../../utils/SavedNotesContext";
import {useNewNoteContext} from "../../utils/NewNoteContext"
import {useUserContext} from "../../utils/UserContext"

function SavedNotes() {
	const [{notes}, setNotes] = useSavedNotesContext();
	const [newNote, setNewNote] = useNewNoteContext();
	const [user] = useUserContext();
	
	// If a Note is double-clicked, set newNote's values to that note
	const handleClick = (index)=>{
		setNewNote({type:"update", data: notes[index], index:index})
	}
	const handleDelete = (notesId, index) => {
		axios.delete("/api/notes/" + notesId).then((response) => {
			setNotes({type:"delete",index:index})
		})
	}
	// This component is empty if user.loggedIn is false
	return(
		<>
		{ user.loggedIn ?
		<>
			<SortButton />
			<div>
				{/* For every note in Notes, create a Note object */}
				{notes.map((note, index) => (
					<Note 
						key={note.id} 
						note={note} 
						index={index} 
						handleClick={handleClick} 
						handleDelete={handleDelete}
					/>
				))}
			</div>
			</>
			:
			<></>
		}
		</>
	);
}

export default SavedNotes;


