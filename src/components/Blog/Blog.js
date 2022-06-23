import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Container from "react-bootstrap/Container";
import "./Blog.css"
import first from "./../../images/newyork-pic.jpg"
import second from "./../../images/wedding-pic.jpg"
import third from "./../../images/bohemian-pic.jpg"
import Button from "react-bootstrap/Button";

function Blog() {
    return (
        <Container>
            <div className="d-flex m-4 justify-content-between">
                <p className="m-0 fw-bolder fs-5">LATEST FROM BLOG</p>
                <Button className="fw-bolder text-secondary" variant="light">SEE ALL</Button>
            </div>
            <CardGroup>
                <Card className="px-3">
                    <Card.Img variant="top" src={first}/>
                    <Card.Body className="background2 px-3 pt-2 margin2">
                        <p className="text-start fw-bold mb-2">THE EASIEST WAY TO BREAK </p>
                        <Card.Text>
                            <p className="text-start">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
                                dolor tempore! Consequuntur, minus!</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="px-3 ">
                    <Card.Img variant="top" src={second}/>
                    <Card.Body className="background2 px-3 pt-2 margin2 ">
                        <p className="text-start fw-bold mb-2">WEDDING SEASON</p>
                        <Card.Text>
                            <p className="text-start">Lorem ipsum dolor sit amet, consectetur adipisicing elit. officiis
                                quas quidem ratione rem, voluptates.</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="px-3">
                    <Card.Img variant="top" src={third}/>
                    <Card.Body className="background2 px-3 pt-2 margin2">
                        <p className="text-start fw-bold mb-2">RECENT FAVORITES ON REPEAT </p>
                        <Card.Text>
                            <p className="text-start">Lorem ipsum dolor sit amet. Consequuntur cupiditate delectus
                                dolorem molestias.</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>
        </Container>

    );
}
export default Blog;
