import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Figure from 'react-bootstrap/esm/Figure';
import Button from 'react-bootstrap/esm/Button';
import Img2 from '../../images/women.webp';
import Img3 from '../../images/men.jpg';
import Img4 from '../../images/accessories.jpeg';

const RightSide = () => {
    return (
        <div>
            <Row>
                <Col className="text">
                        <div className="innerText">
                            <Button variant="light" size="lg">Women</Button>
                        </div>
                    <Figure.Image
                        width={320}
                        alt="women"
                        src={Img2}
                    />
                </Col>
                <Col className="text">
                    <div className="innerText">
                        <Button variant="light" size="lg">Men</Button>
                    </div>
                    <Figure.Image 
                    width={320}
                    alt="men"
                    src={Img3}
                    />
                </Col>
            </Row>
                <Row className="text">
                    <Figure >
                        <div className="innerText">
                            <Button variant="light" size="lg">Accessories</Button>
                        </div>
                        <Figure.Image className="accessories"
                            width={660}
                            alt="accessories"
                            src={Img4}
                        />
                    </Figure>
                 </Row>
        </div>
    )
}
export default RightSide