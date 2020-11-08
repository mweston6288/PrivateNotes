import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NewNote from "./components/newNotes/NewNote";
import SavedNotes from "./components/savedNotes/SavedNotes";
import Categories from "./components/Categories/Categories"
import {SavedNotesProvider} from "./utils/SavedNotesContext";
import LoginWindow from "./components/Login/LoginWindow";
import {UserProvider} from "./utils/UserContext";
import {LoginProvider} from "./utils/LoginContext";
import {NewNoteProvider} from "./utils/NewNoteContext";
function App() {
	return (
		// Main page contains two columns. The left column will display saved notes.
		// The right will let users make new notes
		<>
			<NewNoteProvider>
				<UserProvider>
					<LoginProvider>
						<SavedNotesProvider>
							<Container>
								<Row>
									<Col sm={3}>
										<Categories/>
									</Col>
									<Col sm={4}>
										<div style={{overflowY:"scroll", height:"100vh"}}>
											<SavedNotes/>
										</div>
									</Col>
									<Col sm={5}>
										<NewNote/>
									</Col>
								</Row>
							</Container>
							<LoginWindow />
						</SavedNotesProvider >
					</LoginProvider>
				</UserProvider>
			</NewNoteProvider>
		</>
	);
}

export default App;
