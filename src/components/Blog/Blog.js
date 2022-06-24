import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Container from "react-bootstrap/Container";
import "./Blog.css"
import first from "./../../images/newyork-pic.jpg"
import second from "./../../images/wedding-pic.jpg"
import third from "./../../images/bohemian-pic.jpg"
import Button from "react-bootstrap/Button";
import {useState} from "react";

function Blog() {
    const[isHovering, setIsHovering] = useState(false)
    const[isHovering2, setIsHovering2] = useState(false)
    const[isHovering3, setIsHovering3] = useState(false)


    return (
        <Container>
            <div className="d-flex m-4 justify-content-between">
                <p className="m-0 fw-bolder fs-5">LATEST FROM BLOG</p>
                <Button className="fw-bolder text-secondary" variant="light">SEE ALL</Button>
            </div>
            <CardGroup>
                <Card className="px-3">
                    <Card.Img variant="top" src={first} />
                    <Card.Body className={`background2 px-3 pt-2 margin2 ${isHovering? " ":"marginMouseOver"}`}
                               onMouseEnter={()=>setIsHovering(true)}
                               onMouseLeave={()=>setIsHovering(false)}
                    >
                        <p className="text-start fw-bold mb-2">THE EASIEST WAY TO BREAK </p>
                        <Card.Text>
                            <p className="text-start">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
                                dolor tempore! Consequuntur, minus !
                            </p>
                            <div className={`d-flex justify-content-between visuallySeen ${isHovering? " ":"visually-hidden"}`}
                                 onMouseEnter={()=>setIsHovering(true)}
                                 onMouseLeave={()=>setIsHovering(false)}
                            >
                            <p className=" text-secondary">April 6 2032</p>
                                <Button className="fw-bold text-black" variant="outline-light">READ MORE</Button>
                            </div>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="px-3 ">
                    <Card.Img variant="top" src={second}/>
                    <Card.Body className={`background2 px-3 pt-2 margin2 ${isHovering2? " ":"marginMouseOver"}`}
                               onMouseEnter={()=>setIsHovering2(true)}
                               onMouseLeave={()=>setIsHovering2(false)}
                    >
                        <p className="text-start fw-bold mb-2">WEDDING SEASON</p>
                        <Card.Text>
                            <p className="text-start">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. officiis
                                quas quidem ratione rem, voluptates.
                            </p>

                            <div className={`d-flex justify-content-between visuallySeen ${isHovering2? " ":"visually-hidden"}`}
                                 onMouseEnter={()=>setIsHovering2(true)}
                                 onMouseLeave={()=>setIsHovering2(false)}
                            >
                                <p className=" text-secondary">June 9 2032</p>
                                <Button className="fw-bold text-black" variant="outline-light">READ MORE</Button>                            </div>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="px-3">
                    <Card.Img variant="top" src={third}/>
                    <Card.Body className={`background2 px-3 pt-2 margin2 ${isHovering3? " ":"marginMouseOver"}`}
                               onMouseEnter={()=>setIsHovering3(true)}
                               onMouseLeave={()=>setIsHovering3(false)}
                    >
                        <p className="text-start fw-bold mb-2">RECENT FAVORITES ON REPEAT </p>
                        <Card.Text>
                            <p className="text-start">
                                Lorem ipsum dolor sit amet. Consequuntur cupiditate delectus
                                dolorem molestias golleadel bestu.
                            </p>

                            <div className={`d-flex justify-content-between visuallySeen ${isHovering3? " ":"visually-hidden"}`}
                                 onMouseEnter={()=>setIsHovering3(true)}
                                 onMouseLeave={()=>setIsHovering3(false)}
                            >
                                <p className="text-secondary">May 18 2032</p>
                                <Button className="fw-bold text-black" variant="outline-light">READ MORE</Button>                            </div>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>
        </Container>
    );
}
export default Blog;
