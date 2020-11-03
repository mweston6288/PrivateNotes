/**
 * Drop-down button that lets user sort by date or title
 *  Does not filter out any notes
 */

import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton"
import { useSavedNotesContext } from "../../utils/SavedNotesContext";

function SortButton() {
	const [{ notes }, setNotes] = useSavedNotesContext();


	const handleSortClick = (event) => {
		setNotes({ type: "sort", sortBy: event })

	}
	return (
		<DropdownButton title="Sort by">
			<Dropdown.Item as="button" eventKey="Title" onSelect={handleSortClick}>Title</Dropdown.Item>
			<Dropdown.Item as="button" eventKey="reverseUpdatedAt" onSelect={handleSortClick}>Newest First</Dropdown.Item>
			<Dropdown.Item as="button" eventKey="updatedAt" onSelect={handleSortClick}>Oldest First</Dropdown.Item>
		</DropdownButton>
	)
}
export default SortButton;
