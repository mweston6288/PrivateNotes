/**
 * A button added to every saved note. Creates a dropdown menu to add your note to a category
 */

import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton"
import { useUserContext } from "../../utils/UserContext";
import { useSavedNotesContext } from "../../utils/SavedNotesContext";

import axios from "axios";

function CategoryButton({noteId, index}) {
	const [{categories}] = useUserContext();
	const[notes, setNotes] = useSavedNotesContext();
	// TODO, make post request to NotesCategory
	const handleSelect = (category)=>{
		axios.post("/api/noteCategory",{notesId: noteId, categoryId: category.id}).then((response)=>{
			setNotes({type: "updateCategory", index: index, category: category})
		})
	}
	return (
		<DropdownButton title="Add to">
			{
				categories.map(category=>(
					<Dropdown.Item as="button" eventKey={category.id} onSelect={(e)=>handleSelect(category)}>{category.Title}</Dropdown.Item>
				))
			}
		</DropdownButton>
	)
}
export default CategoryButton;
