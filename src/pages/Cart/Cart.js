import React, { useEffect, useState } from 'react'
import { useContext } from 'react';
import { ProductContext } from '../../context/ProductContext';
// import Listitem from "../../components/Listitem"
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


                <button onClick={() => addOrder()} type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center   h-[50px]">zakaz qilish</button>
            </div>

        </div >
    )
}

export default Cart