/*
	Component for new user notes. This component will load and be usable regardless
	of if the user is logged in. Edits to the title and body are saved in a 
	state that will be passed along if the user saves the note
*/

import React from "react";
import Form from "react-bootstrap/Form";
import SaveButton from "./SaveButton";
import {useNewNoteContext} from "../../utils/NewNoteContext";

function NewNote(){
	const [state, setState] =useNewNoteContext();
	// On changing the value in either text box, these two methods handle updating
	// the state
	const handleTitleChange = (event) => {
		setState({ type: "title", data: event.target.value});
	};
	const handleBodyChange = (event)=>{
		setState({type: "body",data:event.target.value});
	};
	
	// Load component. Uses Bootstrap's Form Component
	return (
		<div>
			<Form>
				<Form.Group>
					<Form.Control size="lg" type="text" placeholder="Title" maxLength= "20" onChange={handleTitleChange} value={state.title}/>
					<Form.Control as="textarea" rows="5" onChange={handleBodyChange} value={state.body}/>
				</Form.Group>
			</Form >
			<SaveButton/>
		</div>
	);
	
}
export default NewNote;