import axios from "axios";
import React, {useState} from "react";
import Modal from "react-bootstrap/Modal";
import LoginForm from "./LoginForm"
import SignupForm from "./SignupForm"
import {useUserContext} from "../../utils/UserContext";
function LoginWindow(){
	const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,32}$/;
	const [show, setShow] = useState(true);
	
	const [userContext, setUserContext] = useUserContext();
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
		if(!input.password.match(regex)){
			console.log("Does not match regex");
			//return;
		}
		if(input.password !== input.confirmPassword){
			console.log("Passwords do not match");
			return;
		}
		axios.post("/api/newUser", input).then((response)=>{
			if(!response.data.errors){
				setUserContext({type: "login", data: response.data});
				setShow(false);
				setInput({ username: "", password: "", confirmPassword: "" });
			}else{
				console.log("Username already taken");
			}
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
