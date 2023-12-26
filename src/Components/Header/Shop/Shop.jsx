import React, { useEffect, useState } from 'react'
import './Shop.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../../utilities/fakedb';
import { Link } from 'react-router-dom';


const Shop = () => {

    const [products, setproducts] = useState([]);
    const [cart, setCart] = useState([])

    useEffect(() => {

        fetch('products.json')
            .then(res => res.json())
            .then(data => setproducts(data))

    }, []);
    
    useEffect(() => {
        const storedCart = getShoppingCart();
        const saveCart = [];
        for (const id in storedCart) {
            const addedProduct = products.find(product => product.id === id);
            console.log('added product', addedProduct)

            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                saveCart.push(addedProduct);
            }

        }
        setCart(saveCart);
    } ,[products])
    
    const handleAddToCart = (product) => {
        // console.log(product);
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id)
    }

    const handleClearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product

                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart
                    cart={cart}
                    handleClearCart={handleClearCart}
                >
                    <Link className='proceed-link' to="/orders">
                        <button className='btn-proceed'>Review Order
                            <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                        </button>
                    </Link>
                </Cart>
            </div>

        </div>
    );
};

export default Shop;