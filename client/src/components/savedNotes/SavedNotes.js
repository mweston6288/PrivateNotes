import React from "react";
import Container from "react-bootstrap/Container";
import Note from "./Note.js"
import axios from "axios";

class SavedNotes extends React.Component {
	state = {
		notes:[]
	}
	componentDidMount(){
		axios.get("/api/notes").then(response=>{
			console.log(response);
			this.setState({ ...this.state, notes: response.data});
			console.log(this.state);

		})
	}
	render(){
		return(
			<Container>
				<div>
					{this.state.notes.map((note)=>(
						<Note Title={note.Title} Body={note.Body}/>
					))}
				</div>
			</Container>
		)
	}
}
export default SavedNotes;