import React from 'react';
import {Carousel, Col, Row, ButtonGroup, Button, Figure} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Pants from "../../../images/pants.jpg";
import { ArrowCircleUpOutlined, ArrowCircleDownOutlined } from "@mui/icons-material";
        
const Item = () => {
    return (
        <Container fluid>
            <Row>
                <Container>
                    <Row>
                        <Col>     
                            <ButtonGroup aria-label="First group" size="SM">
                        <Button variant="light"><ArrowCircleUpOutlined/></Button>
                        <Button variant="light"><ArrowCircleDownOutlined/></Button>
                            </ButtonGroup>
                                <Row>  
                    <Figure >
                        <Figure.Image
                        width={90}
                        height={70}
                        alt="171x180"
                        src={Pants}
                        />
                    </Figure>
                                </Row>
                                <Row>  
                    <Figure className="item">
                        <Figure.Image
                        width={90}
                        height={90}
                        alt="171x180"
                        src={Pants}
                        />
                    </Figure>
                                </Row> 
                                <Row>
                    <Figure className="item">
                        <Figure.Image
                        width={90}
                        height={180}
                        alt="171x180"
                        src={Pants}
                        />
                    </Figure>
                                </Row>
                                <Row>
                    <Figure className="item">
                        <Figure.Image
                        width={90}
                        height={180}
                        alt="171x180"
                        src={Pants}
                        />
                    </Figure>
                                </Row>
                        </Col>
                        <Col>
                        <Carousel variant="dark">
                            <Carousel.Item>
                                <Figure.Image
                                className="d-block w-100"
                                src={Pants}
                                width={200}
                                height={500}
                                alt="pants"
                                />
                            </Carousel.Item>
                    </Carousel>
                    </Col>
                </Row>
                </Container>
            </Row>
        </Container>
    )
}
export default Item    