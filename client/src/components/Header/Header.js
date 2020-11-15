/**
 * Display the Header. Header eithewr displays the username and options if user.loggedIn is true
 * or it displays an option to sign in if user.loggedIn is false
 * 
 * ResetPasswordWindow is a sub-component to this
 */

import React, {useState} from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button"
import ResetPasswordWindow from "./ResetPasswordWindow"
import Dropdown from "react-bootstrap/Dropdown"
import DropdownButton from "react-bootstrap/DropdownButton"
import {useUserContext} from "../../utils/UserContext"
import {useLoginContext} from "../../utils/LoginContext"
import { useSavedNotesContext } from "../../utils/SavedNotesContext";

function Header(){
	const [login, setLogin] = useLoginContext();
	const [user, setUser] = useUserContext();
	const [notes,setNotes] = useSavedNotesContext();
	// track whether ResetPasswordWindow should be visible
	const [showResetPassword, setShowResetPassword] = useState(false);
	// style effects unique to Header
	const backgroundStyle = {
		backgroundColor: "#FCFF7F",
		height: "3em"
	}
	// style effects unique to the usewrname display
	const usernameStyle = {
		whiteSpace: "nowrap",
		overflow: "hidden",
		textOverflow: "ellipsis",
		padding: ".6em"
	}
	// reset SavedNotes, User, and Login context when user logs out
	const handleSignout = ()=>{
		setNotes({type:"reset"})
		setUser({type: "logout"})
		setLogin({ type: "show" })

	}
	// display login page when user clicks login option
	const handleLogin = ()=>{
		setLogin({type:"show"})
	}
	// display the ResetPasswordWindow
	const handleShowResetPassword = ()=>{
		setShowResetPassword(true);
	}
	// hide the ResetPasswordWindow
	const handleCloseResetPassword = ()=>{
		setShowResetPassword(false);

	}
	return(
			<header style={backgroundStyle}>
				<Container>
					<Row>
						<Col sm={9}/>
						<Col sm={3}>
							{user.loggedIn ?
								<>
								<DropdownButton id="dropdown-basic-button" title={user.username}>
									<Dropdown.Item as="button" onClick={handleSignout}>Sign out</Dropdown.Item>
									<Dropdown.Item as="button" onClick={handleShowResetPassword}>Change Password</Dropdown.Item>
								</DropdownButton>
								<ResetPasswordWindow show={showResetPassword} handleCloseResetPassword={handleCloseResetPassword}/>
								</>
								:
								<Button variant="link" style={usernameStyle} onClick={handleLogin}>Log in</Button>
							}
						</Col>
					</Row>
				</Container>
			</header>
	)
}
export default Header;