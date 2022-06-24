import "bootstrap/dist/css/bootstrap.min.css";
import {Container, Row, Col, Image} from 'react-bootstrap'

import CardCreator from "../ImageGrid/CardCreator";
import "./CategoryPages.css"

import FilterIcons from "./FilterIcons";

function CategoryGrid(props) {
    return (
    <Container fluid="md" className="container">

        <FilterIcons/>

        <Row>
            <Col>
                <Image src={props.img1} className="item-view"/>
                <CardCreator name={props.name1} price={props.price1}/>
            </Col>

            <Col>
                <Image src={props.img2} className="item-view"/>
                <CardCreator name={props.name2} price={props.price2}/>
            </Col>

            <Col>
                <Image src={props.img3} className="item-view"/>
                <CardCreator name={props.name3} price={props.price3}/>
            </Col>

            <Col className="col-card">
                <Image src={props.img4} className="item-view"/>
                <CardCreator name={props.name4} price={props.price4}/>
            </Col>
            </Row>

            <Row>
            <Col>
                <Image src={props.img5} className="item-view"/>
                <CardCreator name={props.name5} price={props.price5}/>
            </Col>

            <Col>
                <Image src={props.img6} className="item-view"/>
                <CardCreator name={props.name6} price={props.price6}/>
            </Col>

            <Col>
                <Image src={props.img7} className="item-view"/>
                <CardCreator name={props.name7} price={props.price7}/>
            </Col>

            <Col className="col-card">
                <Image src={props.img8} className="item-view"/>
                <CardCreator name={props.name8} price={props.price8}/>
            </Col>
        </Row>
    </Container>
  );
}

export default CategoryGrid;