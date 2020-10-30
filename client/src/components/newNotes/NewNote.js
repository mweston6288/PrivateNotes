/*
	Component for new user notes. This component will load and be usable regardless
	of if the user is logged in. Edits to the title and body are saved in a 
	state that will be passed along if the user saves the note
*/

import React,{useState} from "react";
import Form from "react-bootstrap/Form";
import SaveButton from "./SaveButton";
//import { useUserContext } from "../../utils/UserContext";
// Need to convert to function structure
function NewNote(){
	const [state, setState] =useState({
		Title:"",
		Body:""
	});
	// On changing the value in either text box, these two methods handle updating
	// the state
	const handleTitleChange = (event) => {
		setState({ ...state, Title: event.target.value });
	};
	const handleBodyChange = (event)=>{
		setState({...state,Body:event.target.value});
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