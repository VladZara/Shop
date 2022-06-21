import "./ShoppingCart.css"
import Button from 'react-bootstrap/Button';

const CartButtons = () => {
    return (
        <div className="d-grid gap-2">
            <Button variant="primary" size="lg" className="check-out">
            CHECK OUT
            </Button>
            <Button variant="secondary" size="lg" className="view-cart">
            VIEW CART
            </Button>
        </div>
        )
    }
export default CartButtons