import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../Footer/Footer";
import "./Category.css"

import TopBars from "./TopBars";
import ImgGreed from "./ImgGreed";

function CategoryPage(props) {
  return (
    <div className="App">

    <TopBars category = {props.category}/>
    <ImgGreed img1={props.img1} name1={props.name1} price1={props.price1}
              img2={props.img2} name2={props.name2} price2={props.price2}
              img3={props.img3} name3={props.name3} price3={props.price3}
              img4={props.img4} name4={props.name4} price4={props.price4}
              img5={props.img5} name5={props.name5} price5={props.price5}
              img6={props.img6} name6={props.name6} price6={props.price6}
              img7={props.img7} name7={props.name7} price7={props.price7}
              img8={props.img8} name8={props.name8} price8={props.price8}/>
        <Footer/>
    </div>
  );
}

export default CategoryPage;