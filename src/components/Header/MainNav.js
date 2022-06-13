import React, { Component } from 'react';
import CallIcon from '@mui/icons-material/Call';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import {Nav, Navbar, Container} from 'react-bootstrap'
import SearchIcon from '@mui/icons-material/Search';
import PublicIcon from '@mui/icons-material/Public';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import 'bootstrap/dist/css/bootstrap.min.css';
import  './header.css'
class MainNav extends Component {
    render() {
 return <div>
            <div className='colorNav'>
            <div className='pa'>
            <p> 
                 <CallIcon /> + 068 (68279) 94183    <LocationOnIcon />Strada Vlaicu Pârcălab 52, Chișinău   <QueryBuilderIcon />24/7
            </p>
            </div>
 
            <div className='icons'>
            <FacebookIcon /><InstagramIcon /> <TwitterIcon /> <PinterestIcon /> 
         </div>
     </div>
     <>
  <Navbar bg="light" variant="light">
    <Container className='headertwo'>
        <div>
            <h1>Misto</h1>
        </div>
        <div>
            <Nav  className='head'>
                <h3>About Us</h3>
                <h3>Women</h3>
                <h3>Men</h3>
                <h3>Beauty</h3>
                <h3>Accesories</h3>
                <h3>Blog</h3>
                <h3>Contact</h3>
            </Nav>
        </div>
        <div className='ic'>
            <SearchIcon /><PublicIcon /><PersonIcon/><ShoppingBagIcon />
        </div>
    
    </Container>
  </Navbar>
</>
</div>
}
}
export default MainNav