import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import Orderlist from './Orderlist'
import { ProductContext } from '../../context/ProductContext'
// import { stol } from '../../Static_data'

function Order() {
    const { data } = useContext(ProductContext)

    return (
        <div>
            <h1>Order</h1>

            <div className="">
                {
                    data?.map((order, index) => (
                        <Orderlist order={order} key={index} index={index} />
                    ))
                }
            </div>
        </div>
    )
}

export default Order