import "./ShoppingCart.css";
import Image from 'react-bootstrap/Image';
import removeButton from "./icons/remove.svg";
import addButton from "./icons/add.svg";
import deleteButton from "./icons/delete.svg";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';

const Item = (props) => {
    return (
        
            <Container fluid>
                <Row>
                        <Image src={props.boughtItem} className="image-of-item"/>
                    <Col>
                        <Container fluid>
                            <Col>
                            <Row>
                                <Col>
                                <div>
                                    <p className="name">{props.name}</p>
                                    <p className="color-size">{props.colorSize}</p>
                                </div>
                                </Col>
                            </Row>
                            <Row>
                            <div id="about-item">
                                <div className="amount">
                                <Image src={removeButton} className="item-buttons"></Image>
                                <p>{props.amount}</p>
                                <Image src={addButton} className="item-buttons"></Image>
                                </div>
                                <p className="price">{props.price}</p>
                                <Image src={deleteButton} className="item-buttons"></Image>
                            </div>
                            </Row>
                            </Col>
                        </Container>
                    </Col>
                </Row>
                <hr className="line"/>
            </Container>
        
    )
}
export default Item