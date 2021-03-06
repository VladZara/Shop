import React from "react";
import GridProps from "./components/ImageGrid/ImageGridProps";
import TopSide from "../src/components/Topside/Topside";
import Header from "../src/components/Header/Header";
import Footer from "./components/Footer/Footer";
import Blog from "./components/Blog/Blog";
import SpecialOffers from "./components/SpecialOffers/SpecialOffers";
import Subscribe from "./components/Subscribe/Subscribe";
import PropsForCategories from "./components/CategoryPages/PropsForCategories"


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
        {/* <PropsForCategories/> */}
    </div>
  );
}

export default App;
