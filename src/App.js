import TopSide from "../src/components/Topside/Topside";
import MainNav from "./components/Header/MainNav";
import "bootstrap/dist/css/bootstrap.min.css"; 
import './App.css';

function App() {
  return (
    <div className="App">
      <MainNav/>
      <TopSide/>
    </div>
  );
}

export default App;
