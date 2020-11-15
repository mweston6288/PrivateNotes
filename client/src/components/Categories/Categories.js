/**
 * Display the user's created categories and an input field to make a new one
 * Categories are structured in rows
 */
import React, {useState} from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import {useUserContext} from "../../utils/UserContext"
import {useSavedNotesContext} from "../../utils/SavedNotesContext"

function Categories(){
	const[user,setUser] = useUserContext();
	const [notes, setNotes] = useSavedNotesContext();
	// store the text field's value
	const [newCategory, setNewCategory] = useState("");
	
	// set notes.category to "all"
	const handleAllCategory = ()=>{
		setNotes({type: "all"})
	}
	// set notes.category to the selected value
	const handleCategory = (event)=>{
		setNotes({ type: "category", data: event.target.value })
	}
	// Store the current value of the input for new categories
	const handleInputChange = (e)=>{
		setNewCategory(e.target.value);
	}
	// Add a new category to the db and add to user.categories
	const handleAdd = ()=>{
		axios.post("/api/newCategory", {title: newCategory, userId: user.userId})
			.then((response)=>{
				setUser({type:"categoryAdd", data: response.data})
			})
	}
	// This component will be empty if user.loggedIn is false
	return(
		<>
			{user.loggedIn ?
			<>
				<h2>Categories</h2>
				<InputGroup className="mb-3">
					<FormControl
						placeholder="New category"
						onChange={handleInputChange}
					/>
					<InputGroup.Append>
						<Button variant="outline-secondary" onClick={handleAdd}>add</Button>
					</InputGroup.Append>
				</InputGroup>
				<Container>
					<Row>
						<Button variant="link" block onClick={handleAllCategory}>All</Button>
					</Row>
					{// Create a button for every category in user.categories
					user.categories.map((category) => (
						<Row>
							<Button variant="link" block value={category.title} onClick={handleCategory}>{category.title}</Button>
						</Row>
					))}
				</Container>
			</>
			:
			<></>
			}
		</>
	)
}
export default Categories;
