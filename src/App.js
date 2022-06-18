import TopSide from "../src/components/Topside/Topside";
import MainNav from "./components/Header/MainNav";
import ForMen from "./components/ImageGrid/ForMen";
import ForWomen from "./components/ImageGrid/ForWomen";
import "bootstrap/dist/css/bootstrap.min.css"; 
import './App.css';

function App() {
  return (
    <div className="App">
      <MainNav/>
      <TopSide/>
      <ForWomen/>
      <ForMen/>
    </div>
  );
}

export default App;
