import TopSide from "../src/components/Topside/Topside";
import MainNav from "./components/Header/MainNav";
import "bootstrap/dist/css/bootstrap.min.css";
import ForMen from "./components/ImageGrid/ForMen";
import ForWomen from "./components/ImageGrid/ForWomen";
import './App.css';
import Footer from "./components/Footer/Footer";
import TwoContainers from "./components/TwoContainers/TwoContainers";

function App() {
  return (
    <div className="App">
        <MainNav/>
        <TopSide/>
        <ForWomen/>
        <ForMen/>
        <TwoContainers/>
        <Footer/>
    </div>
  );
}

export default App;
