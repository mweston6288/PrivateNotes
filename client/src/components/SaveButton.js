import React from "react";
import Button from "react-bootstrap/Button";
import axios from "axios";

function SaveButton({state}){
	
	function handleClick (event){
		event.preventDefault();
		axios.post("/api/new", state);
		console.log(state.Title);
		console.log(state.Body);
		console.log("Button clicked");

	}
	return(
		<Button onClick={handleClick}>Save</Button>
	)
}
export default SaveButton;