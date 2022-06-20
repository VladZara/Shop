import MainNav from "../Header/MainNav";
import "bootstrap/dist/css/bootstrap.min.css";
import {Nav, Navbar} from 'react-bootstrap'
import SearchIcon from '@mui/icons-material/Search';
import PublicIcon from '@mui/icons-material/Public';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

import "./Category.css"

function TopBars(props) {
  return (
    <div className="App">

        <MainNav/>
        <Navbar bg="light" variant="light">
        <Navbar.Brand>
            <h2>Misto</h2>
        </Navbar.Brand>
        <div>
            <Nav className='head'>
                <h5>About Us</h5>
                <h5>Women</h5>
                <h5>Men</h5>
                <h5>Beauty</h5>
                <h5>Accesories</h5>
                <h5>Blog</h5>
                <h5>Contact</h5>
            </Nav>
        </div>
        <Nav className='ml-suto'>
            <SearchIcon /><PublicIcon /><PersonIcon/><ShoppingBagIcon />
        </Nav>
        </Navbar>
        <div className="category">
            <h1 className="title-category">{props.category}</h1>
        </div>
        
    </div>
  );
}

export default TopBars;