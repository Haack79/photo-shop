import React, {useState, useContext} from 'react';
import {Context} from "../Context";


const Image = ({className, img}) => {
    const [hovered, setHovered] = useState(false);
    const {toggleFavorite} = useContext(Context); 

    const heartIcon = () => {
        if (img.isFavorited) {
            return <i className="ri-heart-fill favorite" onClick={() => {toggleFavorite(img.id)}}></i>
        } else if (hovered) { 
            return <i className="ri-heart-line favorite" onClick={() => {toggleFavorite(img.id)}}></i>
        }
    }
    // const heartIcon = hovered && <i className="ri-heart-line favorite" onClick={() => {toggleFavorited(img.id)}}></i>

    const cartIcon = hovered && <i className="ri-add-circle-line cart"></i>

    return (
        <div className={`${className} image-container`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <img alt="animal or nature" src={img.url} className="image-grid"/>
            {heartIcon()}
            {cartIcon}
        </div>
    )
}
export default Image; 