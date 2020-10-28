/**
 * Primary component for the saved Notes window
 * When needed, it makes a GET request for notes and then 
 * creates a Note component for each received note
 */

import React from "react";
import Container from "react-bootstrap/Container";
import Note from "./Note.js";
import {useSavedNotesContext} from "../../utils/SavedNotesContext";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton"
function SavedNotes() {
	const [{notes}, setNotes] = useSavedNotesContext();


	const handleSortClick = (event)=>{
		console.log(event);
		setNotes({type: "sort", sortBy: event})

	}
	return(
		<Container>
			<DropdownButton title="Sort by">
				<Dropdown.Item as="button" eventKey="Title" onSelect={handleSortClick}>Title</Dropdown.Item>
				<Dropdown.Item as="button" eventKey="reverseUpdatedAt" onSelect={handleSortClick}>Newest First</Dropdown.Item>
				<Dropdown.Item as="button" eventKey="updatedAt" onSelect={handleSortClick}>Oldest First</Dropdown.Item>
			</DropdownButton>
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


