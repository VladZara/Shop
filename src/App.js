import React from "react";
import GridProps from "./components/ImageGrid/GridProps";
import TopSide from "../src/components/Topside/Topside";
import Header from "../src/components/Header/Header";
import Footer from "./components/Footer/Footer";
import Blog from "./components/Blog/Blog";
import Subscribe from "./components/Subscribe/Subscribe";


import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <div className="App">
      <Header/>
      <TopSide/>
        <GridProps/>
        <Subscribe/>
        <Blog/>
        <Footer/>
        {/* <CategoryProps/> */}
    </div>
  );
}

export default App;
