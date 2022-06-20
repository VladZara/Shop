import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../Footer/Footer";
import "./Category.css"
import img1 from "../ImageGrid/imgs/image2.1.png";

import TopBars from "./TopBars";
import ImgGreed from "./ImgGreed";

function CategoryPage(props) {
  return (
    <div className="App">

    <TopBars category = {props.category}/>
    <ImgGreed img1={img1} name="iufenfen" price="2832"/>

        <Footer/>
    </div>
  );
}

export default CategoryPage;