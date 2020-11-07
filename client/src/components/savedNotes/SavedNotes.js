/**
 * Primary component for the saved Notes window
 * When needed, it makes a GET request for notes and then 
 * creates a Note component for each received note
 */

import React from "react";
import Note from "./Note.js";
import {useSavedNotesContext} from "../../utils/SavedNotesContext";
import SortButton from "./SortButton"
import {useNewNoteContext} from "../../utils/NewNoteContext"

function SavedNotes() {
	const [{notes},] = useSavedNotesContext();
	const [newNote, setNewNote] = useNewNoteContext();
	const handleClick = (index)=>{
		setNewNote({type:"update", data: notes[index], index:index})
		console.log(newNote);
	}
	return(
		<>
			<SortButton />
			<div>
				{/* For every note in Notes, create a Note object */}
				{notes.map((note, index) => (
					<Note key={note.id} note={note} index={index} handleClick={handleClick}/>
				))}
			</div>
		</>
	);
}

export default SavedNotes;


