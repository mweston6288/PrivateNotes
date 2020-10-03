import React from "react";
import Button from "react-bootstrap/Button";
import axios from "axios";

function SaveButton({state}){
	
	function handleClick (event){
		event.preventDefault();
		axios.post("/api/new", state);

	}
	return(
		<Button onClick={handleClick}>Save</Button>
	)
}
export default SaveButton;