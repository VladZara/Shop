import TopSide from "../src/components/Topside/Topside";
import MainNav from "./components/Header/MainNav";
import "bootstrap/dist/css/bootstrap.min.css";
import ForMen from "./components/ImageGrid/ForMen";
import ForWomen from "./components/ImageGrid/ForWomen";
import './App.css';
import Footer from "./components/Footer/Footer";
import Subscribe from "./components/Subscribe/Subscribe";
import CartSideBar from "./components/ShoppingCart/CartSideBar";
// import WomenPage from "./components/CategoryPages/WomenPage";
// import MenPage from "./components/CategoryPages/MenPage";
import img from "../src/components/ImageGrid/imgs/image1.png"

function App() {
  return (
    <div className="App">
        <CartSideBar boughtItem={img} name="Hoody" colorSize="White, L" amount="2" price="$38.99" totalPrice="$78.00"/>
        <MainNav/>
        <TopSide/>
        <ForWomen/>
        <ForMen/>
        <Subscribe/>
        <Footer/>
        {/*/!* <WomenPage/>*/}
        {/*<MenPage/> *!/*/}
    </div>
  );
}

export default App;
