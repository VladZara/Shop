import img from "../../images/img.jpg";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import "./Subscribe.css"
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


const Subscribe = () => {
    return (
        <Container className="d-flex justify-content-center  align-items-center ">
            <Image src={img} fluid="true" className="m-0 card-size"/>
            <div className="white-bg position-absolute">
                <p className="background fw-bold top">SPECIAL OFFER</p>
                <p className="background fw-bold fs-4 middle">SUBSCRIBE</p>
                <p className="background fw-bold fs-4 bottom">AND <span className="pink">GET 10% OFF</span> </p>
                <Form.Group className="mb-3  email-position ">
                    <Form.Control className="form2 border-0 m-0" type="email" placeholder="Enter your email" />
                </Form.Group>
                <Button variant="dark" className="border-0 rounded-0 btn-w">SUBSCRIBE</Button>
            </div>
        </Container>
    )
}
export default Subscribe
