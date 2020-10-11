import React, {useState} from "react";
import Modal from "react-bootstrap/Modal";
import LoginForm from "./LoginForm"
import SignupForm from "./SignupForm"
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
		console.log(input);
	}
	const handlePasswordChange = (event) => {
		setInput({ ...input, password: event.target.value });
	}
	const handleConfirmPasswordChange = (event) => {
		setInput({ ...input, passwordConfirm: event.target.value });
	}
	const handleClose = () => setShow(false);
	const handleSignupPage = () => setLoginPage(false);
	const handleLoginPage = () => setLoginPage(true);

	return (
		// TODO: Create user login context and connect to save button
		// Add an input field in body
		// make user database
		<Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
			<Modal.Header closeButton>
				{
					loginPage ?
						<Modal.Title>You must log in to save or view notes</Modal.Title>
						:
						<Modal.Title>Create an account</Modal.Title>
				}
			</Modal.Header>
			<Modal.Body>
				{
					loginPage ?
						<LoginForm handleClose={handleClose} handleUsernameChange={handleUsernameChange} />
						:
						<SignupForm handleClose={handleClose} handleUsernameChange={handleUsernameChange} />
				}
			</Modal.Body>
			<Modal.Footer>
				{
					loginPage ?
						<a>Don't have an account? <a onClick={handleSignupPage} href={'#'}>Sign up</a></a>
						:
						<a>Already have an account? <a onClick={handleLoginPage} href={'#'}>Log in</a></a>
				}
			</Modal.Footer>
		</Modal>
	);
}
export default LoginWindow;
