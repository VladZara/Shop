import React from "react";
import GridProps from "./components/MainPage/ImageGrid/ImageGridProps";
import TopSide from "../src/components/MainPage/Topside/Topside";
import Header from "../src/components/Header/Header";
import Footer from "./components/Footer/Footer";
import Blog from "./components/MainPage/Blog/Blog";
import SpecialOffers from "./components/MainPage/SpecialOffers/SpecialOffers";
import Subscribe from "./components/MainPage/Subscribe/Subscribe";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <div className="App">
        <Header/>
        <TopSide/>
        <GridProps/>
        <SpecialOffers/>
        <Subscribe/>
        <Blog/>
        <Footer/>
    </div>
  );
}

export default App;
