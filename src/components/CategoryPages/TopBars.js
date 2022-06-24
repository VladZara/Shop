import MainNav from "../Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import {Navbar} from 'react-bootstrap'

import "./CategoryPages.css"

function TopBars(props) {
  return (
    <div className="App">

        <MainNav/>
        <div className="category">
            <h1 className="title-category">{props.category}</h1>
        </div>
        <Navbar>
        </Navbar>
        
    </div>
  );
}

export default TopBars;