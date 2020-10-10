import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function LoginWindow(){
	const [show, setShow] = useState(true);
	const [input, setInput] = useState({
		username:"",
		password:"",
		confirmPassword:""
	});
	const [loginPage, setLoginPage] = useState(true);

	const handleUsernameChange = (event)=>{
		setInput({ ...input, username: event.target.value });
	}
	const handlePasswordChange = (event) => {
		setInput({ ...input, password: event.target.value });
	}
	const handleConfirmPasswordChange = (event) => {
		setInput({ ...input, passwordConfirm: event.target.value });
	}
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
					<Form.Group as={Row} controlId="buttons">
						<Col sm={2}>
							<Button variant="primary" onClick={handleClose}>
								Login
							</Button>	
						</Col>
						<Col>
							<Button variant="link">Continue without logging in</Button>
						</Col>
					</Form.Group>
				</Form>
			</Modal.Body>
			<Modal.Footer>
				<a>Don't have an account? <a href={'#'}>Sign up</a></a>
			</Modal.Footer>
		</Modal>
	);
}
export default LoginWindow;
