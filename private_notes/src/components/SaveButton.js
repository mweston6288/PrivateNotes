import React from "react";
import Button from "react-bootstrap/Button"

function SaveButton({state}){
	
	function handleClick (event){
		console.log(state.Title);
		console.log(state.Body);
		console.log("Button clicked");

	}
	return(
		<Button onClick={handleClick}>Save</Button>
	)
}
export default SaveButton;