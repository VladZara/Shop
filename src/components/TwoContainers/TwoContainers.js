import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import first from "../../images/1st_photo.jpg";
import second from "../../images/2nd_photo.jpg";

import "./TwoContainers.css"

const TwoContainers = () => {
    return(
        <div className="d-flex justify-content-around m-0">
            <Container className="d-flex justify-content-center position-relative m-0">
                <Image src={first} className="card-size mx-4 position-relative"/>
                <div className="white-bg position-absolute "/>
                <figcaption className="position-absolute background fw-bold fs-6 top">NEW SEASON</figcaption>
                <figcaption className="position-absolute background fw-bold fs-4 bottom">LOOKBOOK COLLECTION </figcaption>
            </Container>
            <Container className="d-flex justify-content-center position-relative m-0">
                <Image src={second} className="card-size mx-4 position-relative"/>
                <div className="white-bg position-absolute "/>
                <figcaption className="position-absolute background fw-bold fs-6 top">SALE</figcaption>
                <figcaption className="position-absolute background fw-bold fs-4 bottom">GET UP TO <span className="pink">50% OFF</span> </figcaption>
            </Container>
        </div>
    )
}
export default TwoContainers
