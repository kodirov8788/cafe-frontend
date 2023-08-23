import React, { useEffect, useState } from 'react'
import { useContext } from 'react';
import { ProductContext } from '../../context/ProductContext';
import Listitem from "../../components/listItem/Listitem"
import "./Cart.css"
import CartItems from './CartItems';
import axios from 'axios';

function Cart() {
    const { cart, place, data, addOrder } = useContext(ProductContext)

    // console.log(data)


    return (
        <div className='cart'>
            <h1>{cart.length}</h1>
            <div className="cart_wrap">
                <h1>{place}</h1>
                {
                    data?.map((item, index) => (
                        <CartItems key={index} item={item} />
                    ))
                }
                <button button onClick={() => addOrder()}>zakaz qilish11 </button>
            </div>

        </div >
    )
}

export default Cart