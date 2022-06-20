import TopSide from "../src/components/Topside/Topside";
import MainNav from "./components/Header/MainNav";
import "bootstrap/dist/css/bootstrap.min.css";
import ForMen from "./components/ImageGrid/ForMen";
import ForWomen from "./components/ImageGrid/ForWomen";
import './App.css';
import Footer from "./components/Footer/Footer";
import Subscribe from "./components/Subscribe/Subscribe";
// import WomenPage from "./components/CategoryPages/WomenPage";
// import MenPage from "./components/CategoryPages/MenPage";
function App() {
  return (
    <div className="App">
        <MainNav/>
        <TopSide/>
        <ForWomen/>
        <ForMen/>
        <Subscribe/>
        <Footer/>
        {/*/!* <WomenPage/>*/}
        {/*<MenPage/> *!/*/}
    </div>
  );
}

export default App;
