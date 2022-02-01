import React from 'react';
import './Product.css';

const Product = (props) => {
    
    const {category,features,img,name,price,seller,star,stock,url} = props.product ;
    return (
        <div className='product'>
            <div>
                <img src={img} alt="" />
            </div>

            <div>
                <h4>{name}</h4>
                <p><span>by:{seller}</span></p>
                <p>Price:{price}</p>
                <p><small>only {stock} left in stock - order soon </small></p>
                <button onClick={()=>props.handleAddToCart(props.product)} className='btn-regular'>Add to cart</button>

            </div>
            

        </div>
    );
};

export default Product;