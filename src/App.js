import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import GridProps from "./components/ImageGrid/GridProps";
import './App.css';
import TopSide from "../src/components/Topside/Topside";
import Header from "../src/components/Header/Header";
import Subscribe from "../src/components/Subscribe/Subscribe";
import ForMen from "./components/ImageGrid/ForMen";
import ForWomen from "./components/ImageGrid/ForWomen";
import Footer from "./components/Footer/Footer";
import Card from "./components/AddtoCard/Card";
import CartSideBar from "./components/ShoppingCart/CartSideBar";
import img from "../src/components/ImageGrid/imgs/image1.png";
import CategoryProps from "./components/CategoryPages/CategoryProps";

function App() {
  return (
    <div className="App">
        <Header/>
        <CartSideBar boughtItem={img} name="Hoody" colorSize="White, L" amount="2" price="$38.99" totalPrice="$78.00"/>
        <TopSide/>
        <GridProps/>
        <Subscribe/>
        <Footer/>
        <CategoryProps/>
    </div>
  );
}

export default App;
