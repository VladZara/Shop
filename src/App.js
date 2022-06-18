import TopSide from "../src/components/Topside/Topside";
import MainNav from "./components/Header/MainNav";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
        <MainNav/>
        <TopSide/>
        <Footer/>
    </div>
  );
}

export default App;
