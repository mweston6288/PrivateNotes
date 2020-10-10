import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
function LoginWindow(){
	const [show, setShow] = useState(true);

	const handleClose = () => setShow(false);

	return (
		// TODO: Create user login context and connect to save button
		// Add an input field in body
		// make user database
		<Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
			<Modal.Header closeButton>
				<Modal.Title>You must log in to save or view notes</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form>
					<Form.Group controlId="formBasicEmail">
						<Form.Label>Username</Form.Label>
						<Form.Control type="text" placeholder="username" />
					</Form.Group>

					<Form.Group controlId="formBasicPassword">
						<Form.Label>Password</Form.Label>
						<Form.Control type="password" placeholder="Password" />
					</Form.Group>
				</Form>
			</Modal.Body>
			<Modal.Footer>
				<Button variant="secondary" onClick={handleClose}>
					Login
				</Button>
				<Button variant="primary">Continue without logging in</Button>
			</Modal.Footer>
		</Modal>
	);
}
export default LoginWindow;
