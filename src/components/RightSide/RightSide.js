import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Figure from 'react-bootstrap/esm/Figure';
import Img2 from '../../images/women.webp';
// import Img3 from '../../images/men.jpg';
import Img4 from '../../images/accessories.jpeg';

const RightSide = () => {
    return (
        <div>
            <Row>
                <Col>
                    <Figure.Image
                        width={320}
                        alt="women"
                        src={Img2}
                    />
                </Col>
                    <Col>
                        <Figure.Image 
                        width={320}
                        alt="men"
                        // src={Img3}
                        />
                    </Col>
            </Row>
                <Row>
                    <Figure>
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