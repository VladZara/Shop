import React from "react";
import { Container, Col, Row} from 'react-bootstrap';
import { ShareOutlined } from "@mui/icons-material";
import Item from "./Item/Item";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Card.css";
import Stars from "../ImageGrid/Stars";
import CardDescription from "./Item/CardDescription";

const Card = () => {
    return (
        <div>
            <Header/>
                <Container fluid >
                    <Row>
        
                        <Container fluid  className="cardDescription" variant="light" bg="light"   >
                            <Row>
                                <Col >text</Col>
                                <Col></Col>
                                <Col className="alignShare"><ShareOutlined/>Share</Col>
                             </Row>
                            <Row>
                                <Col><h4>Women Tracksuit Q109</h4></Col>
                            </Row>
                            <Row className="align-start">
                                <Col className="align-start"><Stars/></Col>
                                <Col className="align-end">gfkjkkl</Col>
                            </Row>
                        </Container>
                        
                    </Row>
                    <Row>
                        <Col>
                        <Item/>
                        </Col>
                        <Col><CardDescription/></Col>
                    </Row>
                    
                </Container>
            <Footer/>  
    </div>
    )
}
 export default Card