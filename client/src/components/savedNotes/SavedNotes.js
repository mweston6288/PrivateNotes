/**
 * Primary component for the saved Notes window
 * When needed, it makes a GET request for notes and then 
 * creates a Note component for each received note
 */

import React from "react";
import Container from "react-bootstrap/Container";
import Note from "./Note.js";
import {useSavedNotesContext} from "../../utils/SavedNotesContext";
import Categories from "./Categories";
import SortButton from "./SortButton"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

function SavedNotes() {
	const [{notes},] = useSavedNotesContext();

	return(
		<Container>
			<Row>
				<Col>
					<Categories/>
				</Col>
				<Col>
					<SortButton />
					<div>
						{/* For every note in Notes, create a Note object */}
						{notes.map((note, index) => (
							<Note key={note.id} note={note} index={index} />
						))}
					</div>
				</Col>
			</Row>
		</Container>
	);
}

export default SavedNotes;


