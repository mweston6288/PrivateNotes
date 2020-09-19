import React from "react";
import Form from "react-bootstrap/Form";

function NewNote(){
	return(
		<Form>
			<Form.Group>
				<Form.Control size="lg" type="text" placeholder="Title" />
				<Form.Control as="textarea" rows="5" />
			</Form.Group>
		</Form >
	);

}
export default NewNote;