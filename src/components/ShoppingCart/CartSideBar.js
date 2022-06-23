import "./ShoppingCart.css";
import Item from "./ItemsCreator";
import Image from 'react-bootstrap/Image';
import closeButton from "./icons/close.svg";
import CartButtons from "./Buttons";

const CartSideBar = (props) => {
    const closeCartHandler = () => {
        const shoppingCart = document.querySelector(".shopping-cart");
        shoppingCart.classList.add("close-cart");
    }

    return (
        <div className="shopping-cart">
            <div className="top">
                <p className="title">SHOPPING CART</p>
                <div onClick={closeCartHandler}>
                    <Image src={closeButton} className="close-button"></Image>
                </div>
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

