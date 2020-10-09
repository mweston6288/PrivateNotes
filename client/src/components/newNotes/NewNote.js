/*
	Component for new user notes. This component will load and be usable regardless
	of if the user is logged in. Edits to the title and body are saved in a 
	state that will be passed along if the user saves the note
*/

import React from "react";
import Form from "react-bootstrap/Form";
import SaveButton from "./SaveButton";

class NewNote extends React.Component{
	state = {
		Title:"",
		Body:""
	};
	// On changing the value in either text box, these two methods handle updating
	// the state
	handleTitleChange = (event) => {
		this.setState({ ...this.state, Title: event.target.value });
	}
	handleBodyChange = (event)=>{
		this.setState({...this.state,Body:event.target.value});
	}
	// Load component. Uses Bootstrap's Form Component
	render(){
		return (
			<div>
				<Form>
					<Form.Group>
						<Form.Control size="lg" type="text" placeholder="Title" onChange={this.handleTitleChange} />
						<Form.Control as="textarea" rows="5" onChange={this.handleBodyChange}/>
					</Form.Group>
				</Form >
				<SaveButton state={this.state}/>
			</div>
		);
	}
}
export default NewNote;