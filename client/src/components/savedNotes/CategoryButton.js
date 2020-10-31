import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton"
import { useUserContext } from "../../utils/UserContext";

function SortButton() {
	const [{categories}] = useUserContext();

	const handleSelect = (event)=>{
		console.log(event)
	}
	return (
		<DropdownButton title="Add to">
			{
				categories.map(category=>(
					<Dropdown.Item as="button" eventKey={category.Title} onSelect={handleSelect}>{category.Title}</Dropdown.Item>
				))
			}
		</DropdownButton>
	)
}
export default SortButton;
