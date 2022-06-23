import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import first from "../../images/1st_photo.jpg";
import second from "../../images/2nd_photo.jpg";
import "./TwoContainers.css"

const TwoContainers = () => {
    return(
        <Container>
            <div className="d-flex justify-content-around flex m-0 ">
                <Container className="d-flex justify-content-center position-relative m-0">
                    <Image src={first} className="cardSize mx-4 position-relative"/>
                    <div className="whiteBg position-absolute "/>
                    <figcaption className="position-absolute backgroundText fw-bold fs-6 topTxt">NEW SEASON</figcaption>
                    <figcaption className="position-absolute backgroundText fw-bold fs-4 bottomText">LOOKBOOK COLLECTION </figcaption>
                </Container>
                <Container className="d-flex justify-content-center position-relative m-0">
                    <Image src={second} className="cardSize mx-4 position-relative"/>
                    <div className="whiteBg position-absolute "/>
                    <figcaption className="position-absolute backgroundText fw-bold fs-6 topTxt">SALE</figcaption>
                    <figcaption className="position-absolute backgroundText fw-bold fs-4 bottomText">GET UP TO <span className="pink">50% OFF</span> </figcaption>
                </Container>
            </div>
        </Container>

    )
}
export default TwoContainers
