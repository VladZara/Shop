import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../Footer/Footer";
import "./Category.css"

import TopBarsW from "./TopBarsW";
import WImgGreed from "./ImgGreedW";

function WomenPage() {
  return (
    <div className="App">

    {TopBarsW()}
    {WImgGreed()}

        <Footer/>
    </div>
  );
}

export default WomenPage;