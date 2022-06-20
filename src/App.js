import TopSide from "../src/components/Topside/Topside";
import MainNav from "./components/Header/MainNav";
import "bootstrap/dist/css/bootstrap.min.css";
import ForMen from "./components/ImageGrid/ForMen";
import ForWomen from "./components/ImageGrid/ForWomen";
import './App.css';
import Footer from "./components/Footer/Footer";
// import Subscribe from "./components/Subscribe/Subscribe";
import CategoryPage from "./components/CategoryPages/CategoryPage";
// import MenPage from "./components/CategoryPages/MenPage";

function App() {
  return (
    <div className="App">
        {/* <MainNav/>
        <TopSide/>
        <ForWomen/>
        <ForMen/>
        <Subscribe/>
        <Footer/> */}
        <CategoryPage category="Women"/>
    </div>
  );
}

export default App;
