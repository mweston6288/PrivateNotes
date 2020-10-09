import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
class Note extends React.Component {
	
	
	render(){
		return(
			<Container>
				<Card>
					<Card.Body>
						<Card.Title>{this.props.Title}</Card.Title>
						<Card.Text>{this.props.Body}</Card.Text>
					</Card.Body>
				</Card>
			</Container>
		)
	}
}
export default Note;