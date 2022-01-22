import Header from "../components/Header";
import { movie_data } from "../data";
import {
	Container,
	Row,
	Col,
	Card,
	ListGroup,
	ListGroupItem,
	Nav,
	Navbar,
	NavDropdown,
	Form,
	FormControl,
	Button,
} from "react-bootstrap";



const Landing = () => {

    const movie_size = 3;

	return (
		<container>
			<Navbar bg="light" expand="lg">
				<Container fluid>
					<Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
					<Navbar.Toggle aria-controls="navbarScroll" />
					<Navbar.Collapse id="navbarScroll">
						<Nav
							className="me-auto my-2 my-lg-0"
							style={{ maxHeight: "100px" }}
							navbarScroll
						>
							<Nav.Link href="#action1">Home</Nav.Link>
							<Nav.Link href="#action2">Link</Nav.Link>
							<NavDropdown title="Link" id="navbarScrollingDropdown">
								<NavDropdown.Item href="#action3">Action</NavDropdown.Item>
								<NavDropdown.Item href="#action4">
									Another action
								</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item href="#action5">
									Something else here
								</NavDropdown.Item>
							</NavDropdown>
							<Nav.Link href="#" disabled>
								Link
							</Nav.Link>
						</Nav>
						<Form className="d-flex">
							<FormControl
								type="search"
								placeholder="Search"
								className="me-2"
								aria-label="Search"
							/>
							<Button variant="outline-success">Search</Button>
						</Form>
					</Navbar.Collapse>
				</Container>
			</Navbar>
			<Header />
			<Container>
				<Row>
                    {
                        movie_data.slice(0,movie_size).map(({id, name, director})=>(
                            <Col>
                            movie id = {id} <br/>
                            movie name = {name} <br/>
                            director = {director}
                            </Col>
                        ))
                    }
				</Row>
			</Container>
		</container>
	);
};

export default Landing;
