import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Figure from 'react-bootstrap/esm/Figure';
import Img2 from '../../images/women.webp';
import Img3 from '../../images/men.webp';
import Img4 from '../../images/accessories.jpeg';

const RightSide = () => {
    return (
        <Container fluid="md">
            <Row>
                <Col>
                <Figure>
                    <Figure.Image
                        width={200}
                        alt="women"
                        src={Img2}
                    />
                </Figure>
                </Col>
                <Col>
                <Figure>
                    <Figure.Image className="men"
                        width={200}
                        alt="men"
                        src={Img3}
                    />
                </Figure>
                </Col>
            </Row>
            
            <Row>
                <Col className="men2">
                <Figure>
                    <Figure.Image className="accessories"
                        width={510}
                        alt="accessories"
                        src={Img4}
                    />
                </Figure>
                </Col>
            </Row>
        </Container>
    )
}
export default RightSide