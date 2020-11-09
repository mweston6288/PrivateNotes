import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Header(){

	const style = {
		backgroundColor: "#DEF799",
		height: "3em"
	}
	return(
			<header style={style}>
				<Container>
					<Row>
						<Col sm={9}/>
						<Col sm={3}>
							<div style={{padding:".6em"}}>Test</div>
						</Col>
					</Row>
				</Container>
			</header>
	)
}
export default Header;