import React from 'react';
import './Product.css';

const Product = (props) => {
    console.log(props.product)
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

            </div>
            

        </div>
    );
};

export default Product;