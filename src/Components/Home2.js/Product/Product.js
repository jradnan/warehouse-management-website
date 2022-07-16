import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Product.css'

const Product = (props) => {
    const {img, price, name, seller, ratings,} = props.product;
    
   
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
            <h4 className='product-name'>{name}</h4>
            <p><small>Price: ${price}</small> </p>
            <p><small>Manufacturer: {seller}</small></p>
            <p><small>Rating: {ratings} stars</small></p>
            </div>
            <button onClick={()=>props.handleAddToCart(props.product)} className='btn-cart'>
                <p className='btn-text'>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;