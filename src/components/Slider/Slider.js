import Carousel from 'react-bootstrap/esm/Carousel';
import Img1 from '../../images/slider1.webp';
const Slider = () => {
    return (
        <Carousel variant="dark">
            <Carousel.Item>
                <img
                src={Img1}
                height={600}
                alt="img1"
                />
            </Carousel.Item>
        </Carousel>
)
}
export default Slider