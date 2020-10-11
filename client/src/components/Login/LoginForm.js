import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
function LoginForm(props){
	return (
		<Form>
			<Form.Group controlId="formUsername">
				<Form.Label>Username</Form.Label>
				<Form.Control type="text" placeholder="username" onChange={props.handleUsernameChange}/>
			</Form.Group>

			<Form.Group controlId="formPassword">
				<Form.Label>Password</Form.Label>
				<Form.Control type="password" placeholder="Password" autocomplete="on" onChange={props.handlePasswordChange}/>
			</Form.Group>
			<Form.Group as={Row} controlId="buttons">
				<Col sm={3}>
					<Button variant="primary" onClick={props.handleClose}>
						Login
							</Button>
				</Col>
				<Col>
					<Button variant="link">Continue without logging in</Button>
				</Col>
			</Form.Group>
		</Form>
	)
}
export default LoginForm;