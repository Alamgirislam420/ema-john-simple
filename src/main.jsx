import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shop from './Components/Header/Shop/Shop.jsx';
import Home from './Components/Header/Layout/Home.jsx';
import Orders from './Components/Header/Orders/Orders.jsx';
import Inventory from './Components/Inventory/Inventory.jsx';
import Login from './Components/Login/Login.jsx';
import cartProductsLoader from './Loader/cartProductsLoader.js';
import Checkout from './Components/Checkout/Checkout.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element: <Shop></Shop>
      },
      {
        path: 'orders',
        element: <Orders></Orders>,
        loader: cartProductsLoader
      },
      {
        path: 'Checkout',
        element: <Checkout></Checkout>
      },
      {
        path: 'inventory',
        element: <Inventory></Inventory>
      },
      {
        path: 'Login',
        element: <Login></Login>
      }

    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.
  StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
