import Cards from "./Cards";
import SeeAll from "./SeeAll"

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Image from 'react-bootstrap/Image';

import img1 from "./imgs/image1.png";
import img2 from "./imgs/image2.png";
import img3 from "./imgs/image3.png";
import img4 from "./imgs/image4.png";
import img5 from "./imgs/image5.png";
import img6 from "./imgs/image6.png";
import img7 from "./imgs/image7.png";
import img8 from "./imgs/image8.png";

import "./Cards.css"

export const ForMen = () => {
    
    return (
    <Container fluid="md" className="container">
    <h1 className="title">MEN'S</h1>
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

    <SeeAll/>
    
</Container>
    )
}

export default ForMen