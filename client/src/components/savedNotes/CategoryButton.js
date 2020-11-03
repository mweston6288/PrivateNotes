/**
 * A button added to every saved note. Creates a dropdown menu to add your note to a category
 */

import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton"
import { useUserContext } from "../../utils/UserContext";
import axios from "axios";

function CategoryButton({noteId}) {
	const [{categories}] = useUserContext();
	// TODO, make post request to NotesCategory
	const handleSelect = (event)=>{
		axios.post("/api/noteCategory",{notesId: noteId, categoryId: event}).then((response)=>{
			console.log(response);
		})
	}
	return (
		<DropdownButton title="Add to">
			{
				categories.map(category=>(
					<Dropdown.Item as="button" eventKey={category.id} onSelect={handleSelect}>{category.Title}</Dropdown.Item>
				))
			}
		</DropdownButton>
	)
}
export default CategoryButton;
