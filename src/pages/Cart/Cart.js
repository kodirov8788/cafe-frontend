import React, { useEffect, useState } from 'react'
import { useContext } from 'react';
import { ProductContext } from '../../context/ProductContext';
// import Listitem from "../../components/Listitem"
import "./Cart.css"
import CartItems from './CartItems';


function Cart() {
    const { cart, place, cartData, addOrder } = useContext(ProductContext)





    return (<>
        {cart.length < 1 ? <div className="bg-yellow-400 text-white text-center font-bold py-5 text-xl w-[92%] mx-auto rounded-md">
            <h1>Zakaz yo'q</h1>
        </div> :
            <div className='shadow-md w-[92%] mx-auto'>
                <div className="w-full">
                    <div className="bg-blue-500 py-3 px-2 font-bold">
                        <h1 className='text-white'>{place}</h1>
                    </div>

                    <div class="relative overflow-x-auto shadow-md sm:rounded-lg h-[50vh] overflow-y-auto">
                        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" class="px-6 py-3">
                                        Ro'yhat
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        soni
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        o'chirish
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Narxi
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Price
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Narxlari
                                    </th>

                                </tr>
                            </thead>

                            {
                                cartData?.map((item, index) => (
                                    <CartItems key={index} item={item} />
                                ))
                            }
                        </table>
                    </div>

                    <button onClick={() => addOrder()} type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-full h-[50px] mt-3 mx-auto">zakaz qilish</button>
                </div>

            </div >

        }


    </>



    )
}

export default Cart