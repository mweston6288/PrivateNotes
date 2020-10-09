import React from "react";
import Button from "react-bootstrap/Button";
import axios from "axios";
import {useSavedNotesContext} from "../../utils/SavedNotesContext";
function SaveButton({state}){
	const [SavedNotes, dispatch] = useSavedNotesContext();
	function handleClick (event){
		event.preventDefault();
		axios.post("/api/new", state).then((response)=>{
			dispatch({type:"true"});
		})
	};
	return(
		<Button onClick={handleClick}>Save</Button>
	)
}
export default SaveButton;