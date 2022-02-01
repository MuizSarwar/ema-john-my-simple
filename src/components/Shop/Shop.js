import React, { useEffect, useState } from 'react';
import './Shop.css'

const Shop = () => {
    const [products,setProducts] = useState([]);
    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    return (
        <div className='shop-container'>
            
            <div className="product-container">
                
            </div>

            <div className="cart-container">
                <h3>Order Summary</h3>
            </div>
        </div>
    );
};

export default Shop;