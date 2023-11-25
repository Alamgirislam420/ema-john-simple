import React from 'react';
import './Cart.css';
import Product from '../Product/Product';

const Cart = (props) => {
    
    const { cart } = props;
    console.log(cart);
    
    let totalPrice = 0;
    for (const product of cart)
        totalPrice = totalPrice + product.price * product.quantity;
    
    let totalShipping = 0;
    for (const product of cart)
        totalShipping = totalShipping + product.shipping;
    let quantity = 0;
    for(const product of cart)
        quantity = quantity + product.quantity;
    for(const product of cart)
    if (product.quantity === 0) {
        product.quantity = 1;
    }
    const tax = totalPrice * 7 / 100;

    const grandTotal = totalPrice + totalShipping + tax;
    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: ${totalPrice}</p>
            <p>Total Shipping Charge: ${ totalShipping}</p>
            <p>Tax: ${ tax}</p>
            <h5>Grand Total: ${grandTotal}</h5>    
        </div>
    );
};

export default Cart;