/**
 * Save button component to NewNote.
 * On click, POST to the note db and update the SavedNotesContext
 */
import React from "react";
import Button from "react-bootstrap/Button";
import axios from "axios";
import {useSavedNotesContext} from "../../utils/SavedNotesContext";
import {useUserContext} from "../../utils/UserContext";
import {useLoginContext} from "../../utils/LoginContext";
function SaveButton({state}){
	const [SavedNotes, dispatch] = useSavedNotesContext();
	const [user] = useUserContext();
	const [Login, setLogin] = useLoginContext();
	const handleClick = (event) => {
		// if user is logged in, add the new note to the database and then add the note
		// to the user context
		if (user.LoggedIn){
			axios.post("/api/new", {Title: state.Title,Body: state.Body, UserId: user.UserID}).then((response)=>{
				dispatch({type:"addNew", newNote: response.data});
			})
		} // If user is not logged in, display the login window instead
		else{
			setLogin({type: "show"});
		}
	};
	return(
		<Button onClick={handleClick}>Save</Button>
	)
}
export default SaveButton;