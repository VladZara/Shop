import TopSide from "../src/components/Topside/Topside";
import MainNav from "./components/Header/MainNav";
import "bootstrap/dist/css/bootstrap.min.css";
import GridProps from "./components/ImageGrid/GridProps";
import './App.css';
import Footer from "./components/Footer/Footer";
import Subscribe from "./components/Subscribe/Subscribe";
import CartSideBar from "./components/ShoppingCart/CartSideBar";
import img from "../src/components/ImageGrid/imgs/image1.png";
import CategoryProps from "./components/CategoryPages/CategoryProps";

function App() {
  return (
    <div className="App">
        <CartSideBar boughtItem={img} name="Hoody" colorSize="White, L" amount="2" price="$38.99" totalPrice="$78.00"/>
        <MainNav/>
        <TopSide/>
        <GridProps/>
        <Subscribe/>
        <Footer/>
        {/* <CategoryProps/> */}
    </div>
  );
}

export default App;
