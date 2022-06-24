import star1 from "./imgs/star1.svg";
import star2 from "./imgs/star2.svg";
import Image from 'react-bootstrap/Image';
import "./ImageGrid.css"

export const Stars = () => {
    return (
    <div className="stars">
        <Image src={star1}></Image>
        <Image src={star1}></Image>
        <Image src={star1}></Image>
        <Image src={star1}></Image>
        <Image src={star2}></Image>
    </div>
    )
}

export default Stars