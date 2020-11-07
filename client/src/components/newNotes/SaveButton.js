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
import {useNewNoteContext} from "../../utils/NewNoteContext"
function SaveButton(){
	const [SavedNotes, dispatch] = useSavedNotesContext();
	const [user] = useUserContext();
	const [Login, setLogin] = useLoginContext();
	const [NewNote] = useNewNoteContext();
	const handleClick = (event) => {
		// if user is logged in, add the new note to the database and then add the note
		// to the user context
		if (user.LoggedIn){
			if(NewNote.noteId){
				axios.put("api/notes",NewNote).then((response)=>{
					console.log(response);
				})
				console.log("Note is updated")
			}
			axios.post("/api/new", NewNote).then((response)=>{
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