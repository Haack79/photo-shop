import React, {useContext} from "react";
import {Context} from "../Context";
import ImgInCart from "../components/ImgInCart";

function Cart() {
    const {cartItems} = useContext(Context); 
    const cartItemImages = cartItems.map(img => (
        <ImgInCart key={img.id} img={img} />
    ))
    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItemImages}
            <p className="total-cost">Total: </p>
            <div className="order-button">
                <button>Place Order</button>
            </div>
        </main>
    )
}

export default Cart;