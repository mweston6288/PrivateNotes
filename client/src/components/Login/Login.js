import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Login(){
	const [show, setShow] = useState(true);

	const handleClose = () => setShow(false);

	return (
		// TODO: Create user login context and connect to save button
		// Add an input field in body
		// make user database
		<Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
			<Modal.Header closeButton>
				<Modal.Title>Login</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				You must log in to save or view notes
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
export default Login;
