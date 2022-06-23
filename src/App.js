import TopSide from "../src/components/Topside/Topside";
import MainNav from "./components/Header/MainNav";
import "bootstrap/dist/css/bootstrap.min.css";
import ImageGrid from "../src/components/ImageGrid/ImageGrid";
import './App.css';
import Footer from "./components/Footer/Footer";
import Subscribe from "./components/Subscribe/Subscribe";
import CartSideBar from "./components/ShoppingCart/CartSideBar";
import img from "../src/components/ImageGrid/imgs/image1.png";
import CategoryPage from "./components/CategoryPages/CategoryPage";

import img1w from "./components/ImageGrid/imgs/image2.1.png";
import img2w from "./components/ImageGrid/imgs/image2.2.png";
import img3w from "./components/ImageGrid/imgs/image2.3.png";
import img4w from "./components/ImageGrid/imgs/image2.4.png";
import img5w from "./components/ImageGrid/imgs/image2.5.png";
import img6w from "./components/ImageGrid/imgs/image2.6.png";
import img7w from "./components/ImageGrid/imgs/image2.7.png";
import img8w from "./components/ImageGrid/imgs/image2.8.png";

import img1m from "./components/ImageGrid/imgs/image1.png";
import img2m from "./components/ImageGrid/imgs/image2.png";
import img3m from "./components/ImageGrid/imgs/image3.png";
import img4m from "./components/ImageGrid/imgs/image4.png";
import img5m from "./components/ImageGrid/imgs/image5.png";
import img6m from "./components/ImageGrid/imgs/image6.png";
import img7m from "./components/ImageGrid/imgs/image7.png";
import img8m from "./components/ImageGrid/imgs/image8.png";
import TwoContainers from "./components/TwoContainers/TwoContainers";
import Blog from "./components/Blog/Blog";

function TwoContainer() {
    return null;
}

function App() {
  return (
    <div className="App">
        {/*<CartSideBar boughtItem={img} name="Hoody" colorSize="White, L" amount="2" price="$38.99" totalPrice="$78.00"/>*/}
        <MainNav/>
        <TopSide/>
        <ImageGrid title="WOMEN"
         img1={img1w} name1="Women's tracksuit Q109" price1="$38.00"
         img2={img2w} name2="Cluse La Boheme Rose Gold" price2="$30.00"
         img3={img3w} name3="Mercury Tee" price3="$54.00"
         img4={img4w} name4="Skin Sweatpans" price4="$21.00"
         img5={img5w} name5="Short Sleeved Hoodie" price5="$32.00"
         img6={img6w} name6="Ridley High Waist" price6="$68.00"
         img7={img7w} name7="Cream women pants" price7="$45.00"
         img8={img8w} name8="Simple Skin T-shirt" price8="$20.00"/>

        <ImageGrid title="MEN"
         img1={img1m} name1="Striped Sweatshirt" price1="$38.00"
         img2={img2m} name2="Men ponts" price2="$30.00"
         img3={img3m} name3="Men Knit Sweater" price3="$54.00"
         img4={img4m} name4="Dusk Pom Beanie" price4="$180.00"
         img5={img5m} name5="Denim Trucker Jocket" price5="$32.00"
         img6={img6m} name6="Denim Vest" price6="$320.00"
         img7={img7m} name7="Leather White Trainers" price7="$45.00"
         img8={img8m} name8="Checked Tailored Trousers" price8="$280.00"/>
        <TwoContainers/>
        <Subscribe/>
        <Blog/>
        <Footer/>
        {/* <CategoryPage category="Men"
         img1={img1m} name1="Striped Sweatshirt" price1="$38.00"
         img2={img2m} name2="Men ponts" price2="$30.00"
         img3={img3m} name3="Men Knit Sweater" price3="$54.00"
         img4={img4m} name4="Dusk Pom Beanie" price4="$180.00"
         img5={img5m} name5="Denim Trucker Jocket" price5="$32.00"
         img6={img6m} name6="Denim Vest" price6="$320.00"
         img7={img7m} name7="Leather White Trainers" price7="$45.00"
         img8={img8m} name8="Checked Tailored Trousers" price8="$280.00"/> */}
    </div>
  );
}

export default App;
