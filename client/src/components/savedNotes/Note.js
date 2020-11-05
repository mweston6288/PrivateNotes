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
function Note({note,index}){
	const [{ category },] = useSavedNotesContext();
	const [open, setOpen] = useState(false)

	const categories = [];
	note.Categories.forEach((element)=>{
		categories.push(element.Title);
	})
	// The stylesheet for the note text body so long notes don't take large amounts of screen space
	const textEllipses = {
		whiteSpace: "nowrap",
		overflow: "hidden",
		textOverflow: "ellipsis"
	}
	return(

		<div>
			{ // if user category is set to "all", display all notes. Otherwise, display only
			// notes that have a matching category value
			category === "all" || categories.includes(category) ?
				<Container>
					<Card>
						<Card.Body onMouseEnter={()=>setOpen(true)} onMouseLeave={()=>setOpen(false)}>
							<Card.Title>{note.Title}</Card.Title>
							<Card.Text style={textEllipses}>{note.Body}</Card.Text>
							<Fade in={open}><div><CategoryButton noteId={note.id} index={index}/></div></Fade>
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