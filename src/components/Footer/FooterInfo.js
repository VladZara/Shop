import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import FooterBottom from "./FooterBottom";

const FooterInfo = () => {
    return(
        <div className="footerInfo my-4">
            <Container fluid="true" className="mx-5">
                <Row>
                    {/*Column1 */}
                    <div className="col-md-3 col-sm-6 alignment">
                        <h6>CATEGORIES</h6>
                        <ul className="list-unstyled list-font">
                            <li>Men</li>
                            <li>Women</li>
                            <li>Accessories</li>
                            <li>Beauty</li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <h6>INFORMATION</h6>
                        <ul className="list-unstyled list-font ">
                            <li>About Us</li>
                            <li>Contact Us</li>
                            <li>Blog</li>
                            <li>FAQs</li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <h6>USEFUL LINKS</h6>
                        <ul className="list-unstyled list-font">
                            <li>Terms & Conditions</li>
                            <li>Returns & Exchanges</li>
                            <li>Shipping & Delivery</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <h6>CONTACT US</h6>
                        <ul className="list-unstyled list-font">
                            <li> <LocationOnOutlinedIcon/>    Ukraine, Kyiv, Khreshchatyk 1</li>
                            <li> <CallOutlinedIcon/>     +38(040)12 34 567</li>
                            <li> <AccessTimeOutlinedIcon/>     All week 24/7</li>
                            <li> <EmailOutlinedIcon/>     shaman.music@gmail.com</li>
                        </ul>
                    </div>
                </Row>
            </Container>
            <FooterBottom/>
        </div>
    )
}
export default FooterInfo
