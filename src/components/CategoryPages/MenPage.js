import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../Footer/Footer";
import "./Category.css"

import TopBarsM from "./TopBarsM";
import MImgGreed from "./ImgGreedM";

function MenPage() {
  return (
    <div className="App">

    {TopBarsM()}
    {MImgGreed()}

        <Footer/>
    </div>
  );
}

export default MenPage;