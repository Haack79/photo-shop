import React, {useContext, useState} from "react";
import {Context} from "../Context";

const ImgInCart = ({img}) => {
    const {removeFromCart} = useContext(Context); 
    const [hovered, setHovered] = useState(false);
    const iconClassName = hovered ? "ri-delete-bin-fill" : "ri-delete-bin-line";
    return (
        <div className="cart-item">
            <i  className={iconClassName}
                onClick={() => removeFromCart(img.id)}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            ></i>
            <img alt="a beautiful picture" src={img.url} width="130px" />
            <p>$5.99</p>
        </div>
    )
}
export default ImgInCart; 