import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import CardGroup from 'react-bootstrap/esm/CardGroup';
import Card from 'react-bootstrap/esm/Card';
const Info = () => {
    return (
        <Container fluid="md" >
            <Row>
                <Col><CardGroup>
            <Card>
                <Card.Img variant="left" src="holder.js/100px160" circle />
                <Card.Body>
                <Card.Title>Free Shipping</Card.Title>
                <Card.Text>
                On all UA order or order above $100
                </Card.Text>
                </Card.Body>
            </Card>

            <Card>
                <Card.Img variant="left" src="holder.js/100px160" circle />
                <Card.Body>
                <Card.Title>30 Days Return</Card.Title>
                <Card.Text>
                Simply return it within 30 days for and exchange
                </Card.Text>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                <Card.Title>Support 24/7</Card.Title>
                <Card.Text>
                    contact us 24 hours a day. 7 days a week
                </Card.Text>
                </Card.Body>
            </Card>
            </CardGroup></Col>
            </Row>
</Container>
    )
}
export default Info