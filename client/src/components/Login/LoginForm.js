import React, { useState } from "react";
import Form from "react-bootstrap/Form";
function LoginForm(){
	return (
		<div>
			<Form>
				<Form.Group controlId="formBasicEmail">
					<Form.Label>Username</Form.Label>
					<Form.Control type="text" placeholder="username" />
				</Form.Group>

				<Form.Group controlId="formBasicPassword">
					<Form.Label>Password</Form.Label>
					<Form.Control type="password" placeholder="Password" />
				</Form.Group>
				<Button variant="primary" type="submit">
					Submit
 				 </Button>
			</Form>
		</div>
	)
}
export default LoginForm;