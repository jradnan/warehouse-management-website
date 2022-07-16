import React, { useEffect, useState } from 'react';
import Product from '../Home2.js/Product/Product';
import './Home2.css';



const Home2 = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(()=>{
         fetch('https://quiet-hamlet-32880.herokuapp.com/product')
         .then(res=> res.json())
         .then(data => setProducts(data))
    },[])
    const handleAddToCart =(product) =>{
        console.log(product)
        const newCart =[...cart, product];
        setCart(newCart);
    }
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product=> <Product key={product.id} 
                        handleAddToCart={handleAddToCart}
                        product={product}>
                        </Product>)
                }
            </div>
           
            
        </div>
    );
};

export default Home2;