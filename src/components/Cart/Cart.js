import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const {cart} = props;
    let total = 0;
    for (const product of cart) {
        total = total + product.price;
    }
    return (
        <div>
            <h3>Order Summary</h3>
            <h4>Items Ordered:{props.cart.length}</h4>
            <h4>Total Price :{total}</h4>
        </div>
    );
};

export default Cart;