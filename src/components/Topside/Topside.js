import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Slider from '../Slider/Slider';
import RightSide from '../RightSide/RightSide';
import Info from '../Info/Info';
import './Topside.css';

const TopSide = () => {
    return (
      <Container fluid="md" className="mt-20">
        <Row>
          <Col className="text">
            <div className="innerText text-center">
              Your Banner
            </div>
            <Slider/>
          </Col>
            <Col>
              <RightSide/>
            </Col>
        </Row>
          <Row>
            <Info/>
          </Row>    
      </Container>
    )
}
export default TopSide