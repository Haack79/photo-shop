import React, {useContext} from "react";
import {Context} from "../Context";

const ImgInCart = ({img}) => {
    const {removeFromCart} = useContext(Context); 
    return (
        <div className="cart-item">
            <i className="ri-delete-bin-line" onClick={() => removeFromCart(img.id)}></i>
            <img alt="a beautiful picture" src={img.url} width="130px" />
            <p>$5.99</p>
        </div>
    )
}
export default ImgInCart; 