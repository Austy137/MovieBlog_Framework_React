import Header from '../components/Header'
import { Container, Row, Col, Card, ListGroup, ListGroupItem } from 'react-bootstrap'
const Landing = () => {
    return (
        <div >
            <Header />
            <>
                <Container fluid>
                    <Row>
                        <Col>1 of 2</Col>
                        <Col>2 of 2</Col>
                    </Row>
                </Container>
            </>
        </div>
    )
}

export default Landing