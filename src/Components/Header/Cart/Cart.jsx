import React from 'react';
import './Cart.css';
import Product from '../Product/Product';

const Cart = (props) => {
    
    const { cart } = props;
    console.log(cart);
    
    let totalPrice = 0;
    for (const product of cart)
        totalPrice = totalPrice + product.price;
    
    let totalShipping = 0;
    for (const product of cart)
        totalShipping = totalShipping + product.shipping;
    const tax = totalPrice * 7 / 100;

    const grandTotal = totalPrice + totalShipping + tax;
    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price: ${totalPrice}</p>
            <p>Total Shipping Charge: ${ totalShipping}</p>
            <p>Tax: ${ tax}</p>
            <h5>Grand Total: ${grandTotal}</h5>    
        </div>
    );
};

export default Cart;