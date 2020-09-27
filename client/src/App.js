import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NewNote from "./components/NewNote";

function App() {
	return (
		// Main page contains two columns. The left column will display saved notes.
		// The right will let users make new notes
		<Container>
			<Row>
				<Col>
				</Col>
				<Col>
					<NewNote/>
				</Col>
			</Row>
		</Container>
	);
}

export default App;