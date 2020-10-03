import React from "react";
import Container from "react-bootstrap/Container";
import axios from "axios";

class SavedNotes extends React.Component {
	
	componentDidMount(){
		axios.get("/api/notes").then(response=>{
			console.log(response);
		})
	}
	render(){
		return(
			<Container>

			</Container>
		)
	}
}
export default SavedNotes;