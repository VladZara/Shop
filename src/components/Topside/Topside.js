import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Slider from '../Slider/Slider';
import RightSide from '../RightSide/RightSide';
import Info from '../Info/Info';

const TopSide = () =>{
    return (
        <Container fluid="md" className="topside">
        <Row>
          <Col>
          <Slider/>
          </Col>
          <Col>
          <RightSide/>
          </Col>
        </Row>
        <Row >
            <Info/>
        </Row>    
      </Container>
    )
}
export default TopSide