import TopSide from "../src/components/Topside/Topside";
import MainNav from "./components/Header/MainNav";
import "bootstrap/dist/css/bootstrap.min.css";
import GridProps from "./components/ImageGrid/GridProps";
import './App.css';
import Footer from "./components/Footer/Footer";
import Subscribe from "./components/Subscribe/Subscribe";
import CategoryPage from "./components/CategoryPages/CategoryPage";

function App() {
  return (
    <div className="App">
        <MainNav/>
        <TopSide/>
        <GridProps/>
        <Subscribe/>
        <Footer/>
        {/* <CategoryProps/> */}
    </div>
  );
}

export default App;
