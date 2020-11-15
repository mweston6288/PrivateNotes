/**
 * Individual Note panel. Receives a single note detail from SavedN0otes
 * 
 * THis is a sub-component to SavedNotes and a super-componenet to CategoryButton
 */
import React, {useState} from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Fade from "react-bootstrap/Fade"
import CategoryButton from "./CategoryButton"
import { useSavedNotesContext } from "../../utils/SavedNotesContext";

function Note({note,index, handleClick}){
	const [{ category }] = useSavedNotesContext();
	// track if the CategoryButton should be visible
	const [open, setOpen] = useState(false)
	// For greater ease, store the categories the note is in
	const categories = [];
	if(note.Categories){
		note.Categories.forEach((category)=>{
			categories.push(category.title);
		})
	}
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
					<div onDoubleClick={()=>handleClick(index)}>
						<Card>
							<Card.Body onMouseEnter={()=>setOpen(true)} onMouseLeave={()=>setOpen(false)}>
								<Card.Title>{note.title}</Card.Title>
								<Card.Text style={textEllipses}>{note.body}</Card.Text>
								<Fade in={open}>
									<div>
										<CategoryButton noteId={note.notesId} index={index}/>
									</div>
								</Fade>
							</Card.Body>
						</Card>
					</div>
				</Container>
			:
				<></>
			}
		</div>
	)

}
export default Note;