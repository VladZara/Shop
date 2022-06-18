import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";

const FooterUpperSide = () => {
    return(
        <div className="d-flex footer-part1 my-3 p-0 w-100 align-items-center justify-content-around">
            <p className="title m-0 fw-bold">BE IN TOUCH WITH US:</p>
            <div className="d-flex">
                <Form.Group controlId="formBasicEmail">
                    <Form.Control className="form mx-2 border-0 m-0" type="email" placeholder="Enter your email" />
                </Form.Group>
                <Button variant="outline-light" className="joinUsBtn mx-2">JOIN US</Button>{' '}
            </div>
            <div className="icons">
                <FacebookIcon /> <TwitterIcon /> <InstagramIcon /> <PinterestIcon />
            </div>
        </div>
    )
}
export default FooterUpperSide
