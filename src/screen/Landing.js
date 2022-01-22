import Header from "../components/Header";
import { Container, Row, Col } from "react-bootstrap";

const movie_data = [
    {
        "id": 1,
        "name": "Avenger1",
        "director": "Austin1",
        "casts": "Winson1, Winson2, Winson3",
        "description": "this movie is good",
        "duration": "2 hour",
        "aired_at": new Date(),
        "no_of_review": 123,
        "avg_rating": 7.5

    },
    {
        "id": 2,
        "name": "Avenger2",
        "director": "Austin2",
        "casts": "Winson1, Winson2, Winson3",
        "description": "this movie is good",
        "duration": "2 hour",
        "aired_at": new Date(),
        "no_of_review": 123,
        "avg_rating": 7.5

    },
    
    {
        "id": 3,
        "name": "Avenger2",
        "director": "Austin",
        "casts": "Winson1, Winson2, Winson3",
        "description": "this movie is good",
        "duration": "2 hour",
        "aired_at": new Date(),
        "no_of_review": 123,
        "avg_rating": 7.5

    },
    {
        "id": 4,
        "name": "Avenger2",
        "director": "Austin",
        "casts": "Winson1, Winson2, Winson3",
        "description": "this movie is good",
        "duration": "2 hour",
        "aired_at": new Date(),
        "no_of_review": 123,
        "avg_rating": 7.5

    },
    {
        "id": 5,
        "name": "Avenger2",
        "director": "Austin",
        "casts": "Winson1, Winson2, Winson3",
        "description": "this movie is good",
        "duration": "2 hour",
        "aired_at": new Date(),
        "no_of_review": 123,
        "avg_rating": 7.5

    }
]


const Landing = () => {
	return (
		<Container>
			<Row>
				<Header />
			</Row>
			<Row md={4}>
				<Col>1 of 3</Col>
				<Col xs={6}>2 of 3</Col>
				<Col>3 of 3</Col>
			</Row>
		</Container>
	);
};

export default Landing;
