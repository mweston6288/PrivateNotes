/*
	Component for new user notes. This component will load and be usable regardless
	of if the user is logged in. Edits to the title and body are saved in a 
	state that will be passed along if the user saves the note
*/

import React from "react";
import Form from "react-bootstrap/Form";
import SaveButton from "./SaveButton";
import {useNewNoteContext} from "../../utils/NewNoteContext";
//import { useUserContext } from "../../utils/UserContext";
// Need to convert to function structure
function NewNote(){
	const [state, setState] =useNewNoteContext();
	// On changing the value in either text box, these two methods handle updating
	// the state
	const handleTitleChange = (event) => {
		setState({ type: "title", data: event.target.value});
	};
	const handleBodyChange = (event)=>{
		setState({type: "body",data:event.target.value});
		console.log(state);
	};
	// Load component. Uses Bootstrap's Form Component

	return (
		<div>
			<Form>
				<Form.Group>
					<Form.Control size="lg" type="text" placeholder="Title" maxLength= "20" onChange={handleTitleChange} />
					<Form.Control as="textarea" rows="5" onChange={handleBodyChange}/>
				</Form.Group>
			</Form >
			<SaveButton state={state}/>
		</div>
	);
	
}
export default NewNote;