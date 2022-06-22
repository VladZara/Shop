import "bootstrap/dist/css/bootstrap.min.css";
import {Image} from "react-bootstrap";
import "./Category.css";

import apps from "./icons/apps.svg";
import menu from "./icons/menu.svg";
import filter from "./icons/filter.svg";
import bestselers from "./icons/bestselers.svg";

function IconButtons() {
  return (
    <div className="App">
        <div className="navigation">
            <div className="filters">
                <Image src={filter}></Image>
                <p>Filter</p>
            </div>
            <div className="filters">
                <Image src={menu}></Image>
                <Image src={apps}></Image>
            </div>
            <div className="filters">
                <p>Bestselers</p>
                <Image src={bestselers}></Image>
            </div>
        </div>
    </div>
  );
}

export default IconButtons;