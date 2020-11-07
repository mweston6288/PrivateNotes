/**
 * Display the user's created categories and an input field to make a new one
 * Categories are structured in rows
 */
import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import {useUserContext} from "../../utils/UserContext"
import {useSavedNotesContext} from "../../utils/SavedNotesContext"
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup"
import axios from "axios";
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
function Categories(){
	const[user,setUser] = useUserContext();
	const [notes, setNotes] = useSavedNotesContext();
	const [newCategory, setNewCategory] = useState("");
	
	// set Notes active category to All
	const handleAllCategory = ()=>{
		setNotes({type: "all"})
	}
	const handleCategory = (event)=>{
		setNotes({ type: "category", data: event.target.value })
	}
	// Store the current value of the input for new categories
	const handleInputChange = (e)=>{
		setNewCategory(e.target.value);
	}
	// Add a new category to the db and to the user's list of categories
	const handleAdd = ()=>{
		axios.post("/api/newCategory", {Title: newCategory, UserId: user.UserID})
			.then((response)=>{
				setUser({type:"categoryAdd", data: response.data})
			})
	}
	return(
		<>
		{
			user.LoggedIn ?
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
				{user.categories.map((category) => (
					<Row>
						<Button variant="link" block value={category.Title} onClick={handleCategory}>{category.Title}</Button>
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
