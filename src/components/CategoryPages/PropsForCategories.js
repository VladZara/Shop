import CategoryPage from "./ThePage";

import img1m from "../ImageGrid/imgs/image1.png";
import img2m from "../ImageGrid/imgs/image2.png";
import img3m from "../ImageGrid/imgs/image3.png";
import img4m from "../ImageGrid/imgs/image4.png";
import img5m from "../ImageGrid/imgs/image5.png";
import img6m from "../ImageGrid/imgs/image6.png";
import img7m from "../ImageGrid/imgs/image7.png";
import img8m from "../ImageGrid/imgs/image8.png";

function CategoryProps() {
    return (
        <div>
        <CategoryPage category="Men"
         img1={img1m} name1="Striped Sweatshirt" price1="$38.00"
         img2={img2m} name2="Men pants" price2="$30.00"
         img3={img3m} name3="Men Knit Sweater" price3="$54.00"
         img4={img4m} name4="Dusk Pom Beanie" price4="$180.00"
         img5={img5m} name5="Denim Trucker Jacket" price5="$32.00"
         img6={img6m} name6="Denim Vest" price6="$320.00"
         img7={img7m} name7="Leather White Trainers" price7="$45.00"
         img8={img8m} name8="Checked Tailored Trousers" price8="$280.00"/>
        </div>
    );
}
export default CategoryProps;