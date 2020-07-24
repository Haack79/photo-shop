import React, {useContext} from "react";
import {Context} from "../Context";
import CartImg from "../components/CartImg";

function Cart() {
    const {cartItems} = useContext(Context); 
    const cartItemImages = cartItems.map(img => (
        <CartImg key={img.id} img={img} />
    ))
    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItemImages}
        </main>
    )
}

export default Cart;