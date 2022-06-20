import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/esm/Card';
import Stars from "./Stars"
import "./Cards.css"

const Cards = (name, price) => {
return (
<Card style={{ width: '200px' }} className="card">
  <Card.Body>
    <Card.Subtitle className="mb-2 text-muted name">{name}</Card.Subtitle>
    <div className="card-info">
      <Card.Title id="price">{price}</Card.Title>
      <Stars/>
    </div>
  </Card.Body>
</Card>)
}

export default Cards