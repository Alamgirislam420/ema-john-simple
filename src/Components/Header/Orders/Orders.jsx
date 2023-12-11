import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import ReviewItem from '../../ReviewItem/ReviewItem';
import Product from '../Product/Product';
import { key, removeItem } from 'localforage';
import './Orders.css';
import { faRemove } from '@fortawesome/free-solid-svg-icons';

const Orders = () => {
    const saveCart = useLoaderData();
    const [cart, setCart] = useState(saveCart);
    
    const handleRemoveFromCart = (id) => {
        const remainig = cart.filter(product => product.id !== id);
        setCart(remainig);
        // removeFormDb(id);

    }

    return (
        <div className='shop-container'>
            <div className='review-container'>
                {
                    cart.map(product => <ReviewItem
                        key={product.id}
                        product={product}
                        handleRemoveFromCart={handleRemoveFromCart}
                    ></ReviewItem>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Orders;