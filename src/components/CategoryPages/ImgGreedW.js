import "bootstrap/dist/css/bootstrap.min.css";
import {Container, Row, Col, Image} from 'react-bootstrap'

import Cards from "../ImageGrid/Cards";
import "./Category.css"

import img1 from "../ImageGrid/imgs/image2.1.png";
import img2 from "../ImageGrid/imgs/image2.2.png";
import img3 from "../ImageGrid/imgs/image2.3.png";
import img4 from "../ImageGrid/imgs/image2.4.png";
import img5 from "../ImageGrid/imgs/image2.5.png";
import img6 from "../ImageGrid/imgs/image2.6.png";
import img7 from "../ImageGrid/imgs/image2.7.png";
import img8 from "../ImageGrid/imgs/image2.8.png";
import IconButtons from "./IconButtons";

function WImgGreed() {
    return (
    <Container fluid="md" className="container">

        {IconButtons()}

        <Row>
            <Col>
                <Image src={img1} className="item-view"/>
                {Cards("Women's tracksuit Q109", "$ 38.00")}
            </Col>

            <Col>
                <Image src={img2} className="item-view"></Image>
                {Cards("Cluse La Boheme Rose Gold", "$ 30.00")}
            </Col>

            <Col>
                <Image src={img3} className="item-view"></Image>
                {Cards("Mercury Tee", "$ 54.00")}
            </Col>

            <Col>
                <Image src={img4} className="item-view"></Image>
                {Cards("Skin Sweatpans", "$ 21.00")}
            </Col>
            </Row>

            <Row>
            <Col>
                <Image src={img5} className="item-view"/>
                {Cards("Short Sleeved Hoodie", "$ 32.00")}
            </Col>

            <Col>
                <Image src={img6} className="item-view"></Image>
                {Cards("Ridley High Waist", "$ 68.00")}
            </Col>

            <Col>
                <Image src={img7} className="item-view"></Image>
                {Cards("Cream women pants", "$ 45.00")}
            </Col>

            <Col>
                <Image src={img8} className="item-view"></Image>
                {Cards("Simple Skin T-shirt", "$ 20.00")}
            </Col>
        </Row>
    </Container>
  );
}

export default WImgGreed;