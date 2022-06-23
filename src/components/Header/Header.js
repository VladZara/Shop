import React from 'react';
import CallIcon from '@mui/icons-material/Call';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import {Navbar, Container, Col, Button, ButtonGroup} from 'react-bootstrap'
import SearchIcon from '@mui/icons-material/Search';
import PublicIcon from '@mui/icons-material/Public';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartSideBar from '../ShoppingCart/CartSideBar';

import img from "../ImageGrid/imgs/image1.png";


import { useState } from "react"

const Header = () => {

    const [openCartButton, setOpenCart] = useState(false)

 return (
    <div>
        <CartSideBar trigger={openCartButton} setTrigger={setOpenCart} boughtItem={img} name="Hoody" colorSize="White, L" amount="2" price="$38.99" totalPrice="$78.00"/>
        <Container fluid="true" variant="black">
        <Navbar  bg="dark" variant="dark">
            <Button variant="dark"> <CallIcon /> + 068 (68279) 94183 </Button>   
            <Button variant="dark"> <LocationOnIcon />Strada Vlaicu Pârcălab 52, Chișinău  </Button>    
            <Button variant="dark"> <QueryBuilderIcon />24/7 </Button>  
            <Col></Col>
            <Button variant="dark"> <FacebookIcon />  </Button>   
            <Button variant="dark"> <InstagramIcon /> </Button>   
            <Button variant="dark"> <TwitterIcon /> </Button>   
            <Button variant="dark"> <PinterestIcon /> </Button>
            <Col></Col>   
        </Navbar>
        </Container>
        
     <Container fluid="true" > 
        <Navbar bg="white" variant="black" height="20">
            <Col></Col>
            <Navbar.Brand><h2>Misto</h2></Navbar.Brand>
            <Col></Col>
            <Col><p>About Us</p></Col>
            <Col><p>Women</p></Col>
            <Col><p>Men</p></Col>
            <Col><p>Beauty</p></Col>
            <Col><p>Accesories</p></Col>
            <Col><p>Blog</p></Col>
            <Col><p>Contact</p></Col>
                <ButtonGroup>
                    <Button variant="white"><SearchIcon/></Button>
                    <Button variant="white"><PublicIcon/></Button>
                    <Button variant="white"><PersonIcon/></Button>
                    <Button variant="white" onClick={() => {setOpenCart(true)}}><ShoppingBagIcon/></Button>
             </ButtonGroup>
        </Navbar>
  </Container>
</div>
 )
}
export default Header