import React, {useState, useContext} from 'react';
import PropTypes from 'prop-types';
import {Context} from "../Context";
import useHover from "../hooks/useHover"; 


const Image = ({className, img}) => {
    // const [hovered, setHovered] = useState(false);
    const [hovered, ref] = useHover(); 
    const {toggleFavorite, addImageToCart,removeFromCart, cartItems} = useContext(Context); 

    const heartIcon = () => {
        if (img.isFavorited) {
            return <i className="ri-heart-fill favorite" onClick={() => {toggleFavorite(img.id)}}></i>
        } else if (hovered) { 
            return <i className="ri-heart-line favorite" onClick={() => {toggleFavorite(img.id)}}></i>
        }
    }
    // const heartIcon = hovered && <i className="ri-heart-line favorite" onClick={() => {toggleFavorited(img.id)}}></i>

    const cartIcon = () => {
        const inCart = cartItems.some(item => item.id === img.id);
        if (inCart) {
           return <i className="ri-shopping-cart-fill cart" onClick={() => removeFromCart(img.id)}></i>
        } else if (hovered) {
           return <i className="ri-add-circle-line cart" onClick={() => {addImageToCart(img)}}></i>
        }
    }
    return (
        <div className={`${className} image-container`}
            // onMouseEnter={() => setHovered(true)}
            // onMouseLeave={() => setHovered(false)}
            ref={ref} 
        >
            <img alt="animal or nature" src={img.url} className="image-grid"/>
            {heartIcon()}
            {cartIcon()}
        </div>
    )
}

Image.propTypes = {
    className: PropTypes.string,
    img: PropTypes.shape({
        id: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool
    })
}

export default Image; 