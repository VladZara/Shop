import "bootstrap/dist/css/bootstrap.min.css";
import {Container, Row, Col, Image} from 'react-bootstrap'

import Cards from "../ImageGrid/Cards";
import "./Category.css"

import IconButtons from "./IconButtons";

function ImgGreed(props) {
    return (
    <Container fluid="md" className="container">

        <IconButtons/>

        <Row>
            <Col>
                <Image src={props.img1} className="item-view"/>
                <Cards name={props.name1} price={props.price2}/>
            </Col>

            <Col>
                <Image src={props.img2} className="item-view"/>
                <Cards name={props.name2} price={props.price2}/>
            </Col>

            <Col>
                <Image src={props.img3} className="item-view"/>
                <Cards name={props.name3} price={props.price3}/>
            </Col>

            <Col className="col-card">
                <Image src={props.img4} className="item-view"/>
                <Cards name={props.name4} price={props.price4}/>
            </Col>
            </Row>

            <Row>
            <Col>
                <Image src={props.img5} className="item-view"/>
                <Cards name={props.name5} price={props.price5}/>
            </Col>

            <Col>
                <Image src={props.img6} className="item-view"/>
                <Cards name={props.name6} price={props.price6}/>
            </Col>

            <Col>
                <Image src={props.img7} className="item-view"/>
                <Cards name={props.name7} price={props.price7}/>
            </Col>

            <Col className="col-card">
                <Image src={props.img8} className="item-view"/>
                <Cards name={props.name8} price={props.price8}/>
            </Col>
        </Row>
    </Container>
  );
}

export default ImgGreed;