import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import TopSide from "../src/components/Topside/Topside";
import Header from "../src/components/Header/Header";
import ForMen from "./components/ImageGrid/ForMen";
import ForWomen from "./components/ImageGrid/ForWomen";
import Footer from "./components/Footer/Footer";
import Card from "./components/AddtoCard/Card";

function App() {
  return (
    <div className="App">
        <Header/>
        <TopSide/>
        <ForWomen/>
        <ForMen/>
        <Footer/>
        {/* <Card/> */}
    </div>
  );
}

export default App;
