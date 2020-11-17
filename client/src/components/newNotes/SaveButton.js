/**
 * Save button component to NewNote.
 * On click, POST to the note db and update the SavedNotesContext
 */
import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert"
import axios from "axios";
import {useSavedNotesContext} from "../../utils/SavedNotesContext";
import {useUserContext} from "../../utils/UserContext";
import {useLoginContext} from "../../utils/LoginContext";
import {useNewNoteContext} from "../../utils/NewNoteContext"
function SaveButton(){
	const [savedNotes, setSavedNotes] = useSavedNotesContext();
	const [user] = useUserContext();
	const [login, setLogin] = useLoginContext();
	const [newNote,setNewNote] = useNewNoteContext();
	const [alert, setAlert] = useState({
		show: false,
		message: ""
	})
	const closeAlert = () => {
		setAlert({ show: false, message: "" })
	}
	const handleClick = (event) => {
		if(newNote.title === ""){
			setTimeout(closeAlert, 5000);
			setAlert({
				show: true,
				message: "Title cannot be empty"
			})
			return;
		}
		// if user is logged in, add the new note to the database and then add the note
		// to the user context
		// Otherwise, reveal the login window
		if (user.loggedIn){
			// if newNote.noteId is not empty, we're updating
			// a note so we update with the note info
			// then replace the old note with the new version
			if(newNote.noteId){
				axios.put("api/notes",newNote).then((response)=>{
					setNewNote({ type: "reset" })
					setSavedNotes({type:"updateNote", 
						data: response.data, 
						index: newNote.activeIndex
					})
				}).catch((err)=>{
					console.log(err);
				})
			}
			// if there is no noteId, create a new note and
			// add it to the user's note list
			else{
				axios.post("/api/newNote", {
					userId: user.userId, 
					title: newNote.title, 
					body: newNote.body
				}).then((response)=>{
					setSavedNotes({type:"addNew", newNote: response.data});
					setNewNote({ type: "reset" })
				}).catch((err)=>{
					console.log(err);
			})}
		}
		// If user is not logged in, display the login window instead
		else{
			setLogin({type: "show"});
		}
	};
	return(
		<>
			<Button onClick={handleClick}>Save</Button>
			<Alert show={alert.show} variant="warning">{alert.message}</Alert>
		</>
	)
}
export default SaveButton;