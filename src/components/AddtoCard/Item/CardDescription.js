import { 
    Container,
    Col, 
    Row,
    Navbar, 
    Button, 
    ButtonGroup, 
    ButtonToolbar, 
    Figure} 
    from 'react-bootstrap';
import {Icon} from "@iconify/react/dist/iconify";
import Stars from "../../ImageGrid/Stars";
import Pants from "../../../images/pants.jpg";
import "../Card.css";
import HeartIcon from "./icons/loveheart.png";


const CardDescription = () => {

 return (
    <Container>
        <Container fluid>
            <Row>Color : Blue</Row>
            <Row className="spaceBetweenOptions">
        <Col className="d-inline-flex p-2">
            <Figure.Image
                src={Pants}
                width={60}
                height={60}    
                alt="pantsBlue" 
            />
        </Col>
        <Col className="d-inline-flex p-2">
            <Figure.Image 
                className="item"
                src={Pants}
                width={60}
                height={60}   
                alt="pantsWhte" 
            />
        </Col>
        <Col className="d-inline-flex p-2 spaceBetweenOptions" >   
            <Figure.Image 
                className="item"
                src={Pants}
                width={60}
                height={60}   
                alt="pantsBlack" 
            />
        </Col>
        <Col className="d-inline-flex p-2">
            <Figure.Image 
                className="item"
                src={Pants}
                width={60}
                height={60}   
                alt="pantsRed" 
            />
        </Col>
            </Row>
        
            <Row>Size : A</Row>
            
            <Row>
        <ButtonToolbar className="mb-3" aria-label="Toolbar with Button groups">
            <ButtonGroup className="me-2" aria-label="First group">
                <Button variant="light">XS</Button>
                <Button variant="light">S</Button>
                <Button variant="light">M</Button>
                <Button variant="light">L</Button>
            </ButtonGroup>
        </ButtonToolbar>
            </Row>

        </Container>
            <Row className='lineBreak '>
        <Navbar >
        <Col className="d-inline-flex p-2">    
         <h2>$ 400</h2>
        </Col>
        <Col className="d-inline-flex p-2">
         <Button variant="dark" size="lg">Add To Card</Button>
        </Col>
        <Col>
        <ButtonGroup className="mb-3" aria-label="Card with Button groups">
        <Button variant="light"><Figure.Image  src={HeartIcon}/></Button>
        <Button variant="light"><Figure.Image  src={HeartIcon}/></Button>
        </ButtonGroup>
        </Col>
        </Navbar>
            </Row>
            <Row className='mt-0'>
            <Col>
                <Button variant="light" >Shopping&Delivery</Button>
            </Col>
            <Col>
                <Button variant="light" >Shopping&Delivery</Button>
            </Col>
            <Col>
                <Button variant="light" >Shopping&Delivery</Button> 
            </Col>
            </Row>

            <Row className="mt-0">
                <Container fluid>
            <Row>
                <Col xs lg="4">Guaranteed Safe Checkout </Col>
                <Col className="lineDescription"></Col>
            </Row>
                </Container>
            </Row>

            
                <Container fluid>
                <Row>
                <Col>
                <Icon icon="fa6-brands:stripe"  width="70" height="70" className="mx-1"/>
                </Col>
                <Col>
                <Icon icon="fontisto:paypal"  width="70" height="70" className="mx-1"/>
                </Col>
                <Col>
                <Icon icon="cib:visa"  width="70" height="70" className="mx-1"/>
                </Col>
                <Col>
                <Icon icon="brandico:mastercard"  width="70" height="70" className="mx-1"/>
                </Col>
                <Col>
                <Icon icon="simple-icons:discover"  width="70" height="70" className="mx-1"/>
                </Col>
                <Col> 
                    <Icon icon="fontisto:american-express"  width="70" height="70" className="mx-1"/>
                </Col>
                </Row>
                </Container>
                  
                    
                    
                    
                   
            
            

            <Row className="description">
        <Col className="d-inline-flex p-2"><h4>Description</h4></Col>
            </Row> 

            <Row>
                <Container fluid >
            <Row>
                <Col className="d-inline-flex p-2">
                   <h4>Addtitional Information</h4>
                </Col>
            </Row>
            <Row>
                <Col className="d-inline-flex p-2">
                   <p> Color : Blue, White, Black Grey </p>
                </Col>
            </Row>
            <Row>
                <Col className="d-inline-flex p-2">
                   <p> Size : XS, S, M, L</p>
                </Col>
            </Row>
            <Row>
                <Col className="d-inline-flex p-2">
                   <p> Material : 100% Polyester </p>
                </Col>
            </Row>
                </Container>

                <Container fluid className="description">
            <Row>
                <Col className="d-inline-flex p-2 textAlign">
                    <h2 className="textAlign">Reviews</h2>
                </Col>
            </Row>
            <Row>
                <Col className='d-inline-flex px-5'><Stars/></Col>
            </Row>
            <Container fluid>
            <Row>
                <Col className="d-inline-flex p-2">
                    <h4>User Example</h4>
                </Col>
                <Col>
                    <Stars/>
                </Col>

            </Row>
            <Row>
                <Col className="d-inline-flex p-2">
                     <p className="text-start">
                        Donec ac odio id lectus egestas lacinia sed sed metus. Praesent eu velit quis ipsum lacinia molestie. 
                        Quisque sollicitudin elementum augue, sed lobortis metus sagittis ut. Nulla porta nulla quis dictum vestibulum.
                        Maecenas rhoncus posuere neque id mattis. 
                    </p>
                </Col>
            </Row>
            </Container>
            <Container fluid>
            <Row>
                <Col className="d-inline-flex p-2">
                    <h4>User Example</h4>
                </Col>
                <Col>
                    <Stars/>
                </Col>

            </Row>
            <Row>
                <Col className="d-inline-flex p-2" sm="8">
                     <p className="text-start">
                        Donec ac odio id lectus egestas lacinia sed sed metus. Praesent eu velit quis ipsum lacinia molestie. 
                        Quisque sollicitudin elementum augue, sed lobortis metus sagittis ut. Nulla porta nulla quis dictum vestibulum.
                        Maecenas rhoncus posuere neque id mattis.
                    </p>
                </Col>
                <Col></Col>
            </Row>
            </Container>
                </Container>
            </Row>
</Container>
 )
}
export default CardDescription