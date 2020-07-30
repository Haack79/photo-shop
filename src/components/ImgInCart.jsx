import React, {useContext, useState} from "react";
import PropTypes from "prop-types";
import {Context} from "../Context";
import useHover from "../hooks/useHover";

const ImgInCart = ({img}) => {
    const {removeFromCart} = useContext(Context); 
    // const [hovered, setHovered] = useState(false);
    const [hovered, ref] = useHover(); 
    const iconClassName = hovered ? "ri-delete-bin-fill" : "ri-delete-bin-line";
    return (
        <div className="cart-item">
            <i  className={iconClassName}
                onClick={() => removeFromCart(img.id)}
                // onMouseEnter={() => setHovered(true)}
                // onMouseLeave={() => setHovered(false)}
                ref={ref}
            ></i>
            <img alt="a beautiful picture" src={img.url} width="130px" />
            <p>$5.99</p>
        </div>
    )
}

ImgInCart.propTypes = {
    item: PropTypes.shape({
        url: PropTypes.string.isRequired
    })
}

export default ImgInCart; 