import Container from 'react-bootstrap/Container'
import Carousel from 'react-bootstrap/esm/Carousel';
import Img1 from '../../images/women2.jpg';
const Slider = () => {
    return (
        <Container>
            <Carousel variant="dark">
            <Carousel.Item height={600}>
                <img
                src={Img1}
                alt="img1"
                />
            </Carousel.Item>
            </Carousel>
         </Container>
)
}
export default Slider