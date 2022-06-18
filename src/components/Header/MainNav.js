import React, { Component } from 'react';
import CallIcon from '@mui/icons-material/Call';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import {Row, Col} from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css';
import  './header.css'
const MainNav = () => {
 return ( 
     <div>
    <div className='colorNav'>
    <Row>
        <Col>
            <CallIcon /> + 068 (68279) 94183    
            <LocationOnIcon />Strada Vlaicu Pârcălab 52, Chișinău   
            <QueryBuilderIcon />24/7
        </Col>
            <Col className="ml-auto">
                <FacebookIcon /><InstagramIcon /> <TwitterIcon /> <PinterestIcon /> 
            </Col>
    </Row>
    </div> 
</div>
)
}
export default MainNav