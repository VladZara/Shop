import "./ShoppingCart.css";
import Item from "./ItemsCreator";
import Image from 'react-bootstrap/Image';
import closeButton from "./icons/close.svg";
import CartButtons from "./Buttons";


const CartSideBar = (props) => {
    return (
        <div className="shopping-cart">
            <div className="top">
                <p className="title">SHOPPING CART</p>
                <Image src={closeButton} className="close-button" onClick={closeCart}></Image>
            </div>
            <Item boughtItem={props.img} name={props.name} colorSize={props.colorSize} amount={props.amount} price={props.price}/>
            <div className="total-sum">
                <p>Total:</p>
                <p>{props.totalPrice}</p>
            </div>
            <CartButtons/>
        </div>
    )
}
export default CartSideBar