import Header from "../components/Header";
import { Container, Row, Col } from "react-bootstrap";

const Landing = () => {
	return (
		<Container>
			<Row md={4}>
				<Col>1 of 3</Col>
				<Col xs={6}>2 of 3</Col>
				<Col>3 of 3</Col>
			</Row>
		</Container>
	);
};

export default Landing;
