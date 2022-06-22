import Cards from "./Cards";
import Button from 'react-bootstrap/Button';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Image from 'react-bootstrap/Image';

import "./Cards.css"

export const ImageGrid = (props) => {
    return (
    <Container fluid="md" className="container col-container">
    <h1 className="title">{props.title}</h1>
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

    <Button variant="secondary" size="lg" className="button">
        SEE ALL
    </Button>
    
</Container>
    )
}

export default ImageGrid