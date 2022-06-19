import "bootstrap/dist/css/bootstrap.min.css";
import {Container, Row, Col, Image} from 'react-bootstrap'

import Cards from "../ImageGrid/Cards";
import "./Category.css"

import img1 from "../ImageGrid/imgs/image1.png";
import img2 from "../ImageGrid/imgs/image2.png";
import img3 from "../ImageGrid/imgs/image3.png";
import img4 from "../ImageGrid/imgs/image4.png";
import img5 from "../ImageGrid/imgs/image5.png";
import img6 from "../ImageGrid/imgs/image6.png";
import img7 from "../ImageGrid/imgs/image7.png";
import img8 from "../ImageGrid/imgs/image8.png";

import IconButtons from "./IconButtons";

function MImgGreed() {
    return (
    <Container fluid="md" className="container">

        {IconButtons()}

        <Row>
        <Col>
            <Image src={img1} className="item-view"/>
            {Cards("Striped Sweathirt", "$ 38.00")}
        </Col>

        <Col>
            <Image src={img2} className="item-view"></Image>
            {Cards("Men pants", "$ 30.00")}
        </Col>

        <Col>
            <Image src={img3} className="item-view"></Image>
            {Cards("Men Knit Sweater", "$ 54.00")}
        </Col>

        <Col>
            <Image src={img4} className="item-view"></Image>
            {Cards("Dusk Pom Beanie", "$ 180.00")}
        </Col>
    </Row>
    
    <Row>
        <Col>
            <Image src={img5} className="item-view"/>
            {Cards("Denim Truker Jacket", "$ 32.00")}
        </Col>

        <Col>
            <Image src={img6} className="item-view"></Image>
            {Cards("Denim Vest", "$ 320.00")}
        </Col>

        <Col>
            <Image src={img7} className="item-view"></Image>
            {Cards("Leather White Trainers", "$ 45.00")}
        </Col>

        <Col>
            <Image src={img8} className="item-view"></Image>
            {Cards("Checked Tailored Trousers", "$ 280.00")}
        </Col>
    </Row>
    </Container>
  );
}

export default MImgGreed;