/* eslint-disable react/prop-types */
/**
 * Individual Note panel. Receives a single note detail from
 * SavedNotes
 */
import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import { useSavedNotesContext } from "../../utils/SavedNotesContext";

function Note({note}){	
	const [{ category },] = useSavedNotesContext();

	return(
		<div>
			{category === "all" || note.Categories.includes(category) ?
				<Container>
					<Card>
						<Card.Body>
							<Card.Title>{note.Title}</Card.Title>
							<Card.Text>{note.Body}</Card.Text>
						</Card.Body>
					</Card>
				</Container>
			:
				<></>
			}
		</div>
	)

}
export default Note;