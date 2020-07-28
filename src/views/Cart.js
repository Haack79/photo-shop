import React, {useContext, useState} from "react";
import {Context} from "../Context";
import ImgInCart from "../components/ImgInCart";

function Cart() {
    const {cartItems, emptyCart} = useContext(Context); 
    const [buttonText, setButtonText] = useState('Place Order');
    const cartItemImages = cartItems.map(img => (
        <ImgInCart key={img.id} img={img} />
    ))

    const totalCost = 5.99 * cartItems.length
    const totalCostDisplay = totalCost.toLocaleString("en-US", {style : "currency", currency: "USD"})
    const order = () => {
        setButtonText("Ordering...");
        setTimeout(() => {
            setButtonText("Order Placed!")
            emptyCart();
        },3000)
    }
    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItemImages}
            <p className="total-cost">Total: {totalCostDisplay}</p>
            {
                cartItems.length > 0 ? 
                <div className="order-button">
                    <button className="order-button" onClick={() => order()}>{buttonText}</button>
                </div> :
                <div>
                    <button disabled>{buttonText}</button>
                    <p>No Items in Cart</p>
                </div>
            }
        </main>
    )
}

export default Cart;