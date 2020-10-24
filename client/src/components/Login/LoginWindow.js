/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-unescaped-entities */
/**
 * Primary component for user login. Contains the methods for both
 * the loginForm and SignupForm.
 * Sets the userContext on submit.
 */
import axios from "axios";
import React, {useState} from "react";
import Modal from "react-bootstrap/Modal";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import {useUserContext} from "../../utils/UserContext";
import { useSavedNotesContext } from "../../utils/SavedNotesContext";
import {useLoginContext} from "../../utils/LoginContext";
function LoginWindow(){
	// password must be 8-32 characters with at least 1
	// capital and lowercase letter, a number, and special character
	const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,32}$/;
	// handles whether the login window should be visibile
	const [login, setLogin] = useLoginContext();
	const [userContext, setUserContext] = useUserContext();
	// eslint-disable-next-line no-unused-vars
	const [SavedNotes, setSavedNotes] = useSavedNotesContext();
	// track whether loginPage or signupPage should display
	const [loginPage, setLoginPage] = useState(true);
	// Methods that update input's state when user writes into the 
	// username, password, or confirmPassword fields
	const handleUsernameChange = (event)=>{
		setLogin({type:"username", username: event.target.value });
	};
	const handlePasswordChange = (event) => {
		setLogin({ type: "password", password: event.target.value });
	};
	const handleConfirmPasswordChange = (event) => {
		setLogin({ type: "confirmPassword", confirmPassword: event.target.value });
	};
	
	// Close the login window and reset the input State
	const handleClose = () => {
		setLogin({type: "close"});
	};

	// switch the login window to the loginForm and reset input
	const handleLoginPage = () => {
		setLoginPage(true);
		setLogin({ type: "reset" });
	};
	const handleLogin = () =>{
		axios.post("/api/user", login).then((response) => {
			setUserContext({ type: "login", data: response.data });
			setLogin({ type: "close" });
			axios.get("api/notes/"+response.data.userID).then((response)=>{
				setSavedNotes({type:"add", data: response.data})
			})
		}).catch((err) => {
			console.log(err);
		});
	};

	// switch the login window to the signupForm and reset input
	const handleSignupPage = () => {
		setLoginPage(false);
		setLogin({ type: "reset" });
	};
	// Method that does several checks prior to
	// making a POST request for a new user
	const handleSignup = () =>{
		// check that password has all requirements
		if(login.password.match(regex)){
			console.log("Does not match regex");
			//return;
		}
		// check that password and confirmPassword match
		if(login.password !== login.confirmPassword){
			console.log("Passwords do not match");
			return;
		}
		// Make a POST request
		// If response does not contain an error,
		// update userContext
		// else return an error
		axios.post("/api/newUser", login).then((response)=>{
			if(!response.data.errors){
				setUserContext({type: "login", data: response.data});
				setLogin({ type: "close" });
			}else{
				console.log("Username already taken");
			}
		}).catch((err)=>{
			console.log(err);
		});
	};
	return (
		// TODO: Create user login context and connect to save button
		// Add an input field in body
		// make user database
		// If loginPage is true, create the lgoinForm compoenent
		// and pass the login methods to it
		// Otherwise, create the SignupForm and pass the signup
		// methods to it 
		<Modal show={login.show} onHide={handleClose} backdrop="static" keyboard={false}>
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
						<LoginForm handleClose={handleClose} handleUsernameChange={handleUsernameChange} handlePasswordChange={handlePasswordChange} handleLogin={handleLogin}/>
						:
						<SignupForm handleClose={handleClose} handleUsernameChange={handleUsernameChange} handlePasswordChange={handlePasswordChange} handleConfirmPasswordChange={handleConfirmPasswordChange} handleSignup={handleSignup}/>
				}
			</Modal.Body>
			<Modal.Footer>
				{
					loginPage ?
						<a>Don't have an account? <a onClick={handleSignupPage} href={"#"}>Sign up</a></a>
						:
						<a>Already have an account? <a onClick={handleLoginPage} href={"#"}>Log in</a></a>
				}
			</Modal.Footer>
		</Modal>
	);
}
export default LoginWindow;
