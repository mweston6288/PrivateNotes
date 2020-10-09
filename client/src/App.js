import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NewNote from "./components/newNotes/NewNote";
import SavedNotes from "./components/savedNotes/SavedNotes"
import {SavedNotesProvider} from "./utils/SavedNotesContext";
import Login from "./components/Login/Login"

function App() {
	return (
		// Main page contains two columns. The left column will display saved notes.
		// The right will let users make new notes
		<>
			<SavedNotesProvider>
				<Container>
					<Row>
						<Col>
							<div style={{overflowY:"scroll", height:"100vh"}}>
								<SavedNotes/>
							</div>
						</Col>
						<Col>
							<NewNote/>
						</Col>
					</Row>
				</Container>
			</SavedNotesProvider >
			<Login/>
		</>
	);
}

export default App;
