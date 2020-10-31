/* eslint-disable react/prop-types */
/**
 * Individual Note panel. Receives a single note detail from
 * SavedNotes
 */
import React, {useState} from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import { useSavedNotesContext } from "../../utils/SavedNotesContext";
import Fade from "react-bootstrap/Fade"
import CategoryButton from "./CategoryButton"
function Note({note}){	
	const [{ category },] = useSavedNotesContext();
	const [open, setOpen] = useState(false)
	return(
		<div>
			{category === "all" || note.Categories.includes(category) ?
				<Container>
					<Card>
						<Card.Body onMouseEnter={()=>setOpen(true)} onMouseLeave={()=>setOpen(false)}>
							<Card.Title>{note.Title}</Card.Title>
							<Card.Text>{note.Body}</Card.Text>
							<Fade in={open}><div><CategoryButton noteId={note.id}/></div></Fade>
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