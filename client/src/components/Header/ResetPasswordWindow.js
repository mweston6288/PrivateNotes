/**
 * modal component that display a window that lets a user to reset their password
 * 
 * This is a sub component to Header and depends on Header.handleCloseResetPassword
 * to close the window
 */
import React, { useState } from "react";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useUserContext } from "../../utils/UserContext";

function ResetPasswordWindow({show, handleCloseResetPassword}) {
	// password must be 8-32 characters with at least 1
	// capital and lowercase letter, a number, and special character
	const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,32}$/;

	const [userContext] = useUserContext();
	// saves the values of each text field
	const [input, setInput]= useState({
		password:"",
		newPassword:"",
		confirmPassword:""
	})
	// Methods that update input's state when user writes into the 
	// password, newPassword, or confirmPassword fields
	const handlePasswordChange = (event) => {
		setInput({...input, password: event.target.value})
	};
	const handleNewPasswordChange = (event) => {
		setInput({ ...input, newPassword: event.target.value })
	};
	const handleConfirmPasswordChange = (event) => {
		setInput({ ...input, confirmPassword: event.target.value })
	};

	// Close the window and reset the input State
	const handleClose = () => {
		setInput({
			password: "",
			newPassword: "",
			confirmPassword: ""
		})
		handleCloseResetPassword()

	};
	// update the user password in db
	const handleUpdate = () => {
		// check that newPassword has all requirements
		if (!input.newPassword.match(regex)) {
			console.log("Does not match regex");
			return;
		}
		// check that newPassword and confirmPassword match
		if (input.newPassword !== input.confirmPassword) {
			console.log("Passwords do not match");
			return;
		}
		// Make a PUT request
		// If response does not contain an error, close
		// else return an error
		axios.put("/api/user", {
			userId: userContext.userId, 
			username:userContext.username, 
			password: input.password, 
			newPassword: input.newPassword
		}).then((response) => {
			if (!response.data.errors) {
				handleClose();
			} else {
				console.log("Incorrect Password");
			}
		}).catch((err) => {
			console.log(err);
		});
	};
	return (
		<Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
			<Modal.Header closeButton>
				<Modal.Title>Change Password</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form>
					<Form.Group controlId="formPassword">
						<Form.Label>Current Password</Form.Label>
						<Form.Control type="password" placeholder="Password" onChange={handlePasswordChange} />
					</Form.Group>
					
					<Form.Group controlId="formNewPassword">
						<Form.Label>New Password</Form.Label>
						<Form.Control type="password" placeholder="New Password" autocomplete="on" onChange={handleNewPasswordChange} />
					</Form.Group>

					<Form.Group controlId="formConfirmPassword">
						<Form.Label>Confirm New Password</Form.Label>
						<Form.Control type="password" placeholder="Confirm Password" autocomplete="on" onChange={handleConfirmPasswordChange} />
					</Form.Group>
					<Form.Group as={Row} controlId="buttons">
						<Col sm={3}>
							<Button variant="primary" onClick={handleUpdate}>
								Update
							</Button>
						</Col>
					
					</Form.Group>
				</Form>
			</Modal.Body>
		</Modal>
	);
}
export default ResetPasswordWindow;
