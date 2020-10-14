import axios from "axios";
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
	}
	const handlePasswordChange = (event) => {
		setInput({ ...input, password: event.target.value });
	}
	const handleConfirmPasswordChange = (event) => {
		setInput({ ...input, confirmPassword: event.target.value });
		console.log(input);
	}
	const handleClose = () => {
		setShow(false);
		setInput({ username: "", password: "", confirmPassword: "" });
	}
	const handleSignupPage = () => {
		setLoginPage(false);
		setInput({username:"",password:"", confirmPassword:""});
	}
	const handleLoginPage = () => {
		setLoginPage(true);
		setInput({ username: "", password: "", confirmPassword: "" });
	}
	const handleSignup = () =>{
		if(input.password !== input.confirmPassword){
			console.log(input.password)
			console.log(input.confirmPassword)
			console.log("Passwords do not match");
			return;
		}
		axios.post("/api/newUser", input).then((response)=>{
			console.log(response);
		})
	}
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
						<LoginForm handleClose={handleClose} handleUsernameChange={handleUsernameChange} handlePasswordChange={handlePasswordChange} />
						:
						<SignupForm handleClose={handleClose} handleUsernameChange={handleUsernameChange} handlePasswordChange={handlePasswordChange} handleConfirmPasswordChange={handleConfirmPasswordChange} handleSignup={handleSignup}/>
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
