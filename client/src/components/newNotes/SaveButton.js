/**
 * Save button component to NewNote.
 * On click, POST to the note db and update the SavedNotesContext
 */
import React from "react";
import Button from "react-bootstrap/Button";
import axios from "axios";
import {useSavedNotesContext} from "../../utils/SavedNotesContext";
import {useUserContext} from "../../utils/UserContext";
function SaveButton({state}){
	const [SavedNotes, dispatch] = useSavedNotesContext();
	const [user] = useUserContext();
	function handleClick (event){
		event.preventDefault();
		if (user.LoggedIn){
			axios.post("/api/new", {Title: state.Title,Body: state.Body, UserId: user.UserID}).then((response)=>{
				dispatch({type:"true"});
			})
	}
	};
	return(
		<Button onClick={handleClick}>Save</Button>
	)
}
export default SaveButton;