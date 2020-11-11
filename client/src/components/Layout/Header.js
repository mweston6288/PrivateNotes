import React, {useState} from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button"
import {useUserContext} from "../../utils/UserContext"
import {useLoginContext} from "../../utils/LoginContext"
import { useSavedNotesContext } from "../../utils/SavedNotesContext";
import ResetPassword from "./resetPassword"
import Dropdown from "react-bootstrap/Dropdown"
import DropdownButton from "react-bootstrap/DropdownButton"
function Header(){
	const [login, setLogin] = useLoginContext();
	const [user, setUser] = useUserContext();
	const [notes,setNotes] = useSavedNotesContext();
	const [showResetPassword, setShowResetPassword] = useState(false);

	const backgroundStyle = {
		backgroundColor: "#FCFF7F",
		height: "3em"
	}	
	const usernameStyle = {
		whiteSpace: "nowrap",
		overflow: "hidden",
		textOverflow: "ellipsis",
		padding: ".6em"
	}

	const handleSignout = ()=>{
		setNotes({type:"reset"})
		setUser({type: "logout"})
		setLogin({ type: "show" })

	}
	const handleLogin = ()=>{
		setLogin({type:"show"})
	}

	const handleShowResetPassword = ()=>{
		setShowResetPassword(true);
	}
	const handleCloseResetPassword = ()=>{
		setShowResetPassword(false);

	}
	return(
			<header style={backgroundStyle}>
				<Container>
					<Row>
						<Col sm={9}/>
						<Col sm={3}>
							{user.LoggedIn ?
								<>
								<DropdownButton id="dropdown-basic-button" title={user.Username}>
								<Dropdown.Item as="button" onClick={handleSignout}>Sign out</Dropdown.Item>
								<Dropdown.Item as="button" onClick={handleShowResetPassword}>Change Password</Dropdown.Item>
								</DropdownButton>
								<ResetPassword show={showResetPassword} handleCloseResetPassword={handleCloseResetPassword}/>
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