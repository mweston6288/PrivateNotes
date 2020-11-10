import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button"
import {useUserContext} from "../../utils/UserContext"
import {useLoginContext} from "../../utils/LoginContext"
import { useSavedNotesContext } from "../../utils/SavedNotesContext";
function Header(){
	const [login, setLogin] = useLoginContext();
	const [user, setUser] = useUserContext();
	const [notes,setNotes] = useSavedNotesContext();

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
	return(
			<header style={backgroundStyle}>
				<Container>
					<Row>
						<Col sm={6}/>
						<Col sm={3}>
							{user.LoggedIn ?
								<div style={usernameStyle}>{user.Username}</div>
								:
								<></>
							}
						</Col>
						<Col sm={3}>
							{user.LoggedIn ? 
							<Button variant="link" style={{ padding: ".6em" }} onClick={handleSignout}>Sign out</Button>
							:
							<Button variant="link" style={{ padding: ".6em" }} onClick={handleLogin}>Log in</Button>
						}
						</Col>
					</Row>
				</Container>
			</header>
	)
}
export default Header;