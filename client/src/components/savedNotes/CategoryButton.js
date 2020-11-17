/**
 * A button added to every saved note. Creates a dropdown menu to add your note to a category
 * 
 * sub-component to Note
 */

import React from "react";
import axios from "axios";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton"
import { useUserContext } from "../../utils/UserContext";
import { useSavedNotesContext } from "../../utils/SavedNotesContext";

function CategoryButton({noteId, index}) {
	const [{categories}] = useUserContext();
	const [notes, setNotes] = useSavedNotesContext();
	// Create a new link in note_category and add the category to the note
	const handleSelect = (category)=>{
		axios.post("/api/noteCategory",{notesId: noteId, categoryId: category.categoryId}).then((response)=>{
			setNotes({type: "updateCategory", index: index, category: category})
		})
	}
	return (
		<DropdownButton title="Add to">
			{// Create an item for each category
				categories.map(category=>(
					<Dropdown.Item as="button" 
						eventKey={category.categoryId} 
						onSelect={()=>handleSelect(category)}
					>
						{category.title}
					</Dropdown.Item>
				))
			}
		</DropdownButton>
	)
}
export default CategoryButton;
