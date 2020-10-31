import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import {useUserContext} from "../../utils/UserContext"
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup"
import axios from "axios";
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
function Categories(){
	const[user] = useUserContext();
	const [notes, setNotes] = useUserContext();
	const [newCategory, setNewCategory] = useState("");
	const handleAllCategory = ()=>{
		setNotes({type: "all"})
	}

	const handleInputChange = (e)=>{
		setNewCategory(e.target.value);
		console.log(newCategory)
	}
	const handleAdd = ()=>{
		axios.post("/api/newCategory", {Title: newCategory, UserId: user.UserID})
			.then((response)=>{
				console.log(response);
			})
	}
	return(
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
					<Button onClick={handleAllCategory}>All</Button>
				</Row>
				{user.categories.map((category) => (
					<Row>
						<Button>{category.Title}</Button>
					</Row>
				))}
			</Container>


		</>
	)
}
export default Categories;
