import axios from '../../api/Api'
import React, { useContext, useEffect, useState } from 'react'
import { ProductContext } from '../../context/ProductContext'
import Madeorderlist from './Madeorderlist'

function Madeorder() {
    const { messages, setMadeOrder, madeOrder } = useContext(ProductContext)

    return (
        <div>
            <h2 className="text-3xl font-bold dark:text-white text-center bg-blue-400 py-3">Tayyor zakazlar</h2>
            <div className="shadow w-11/12 m-auto my-2 rounded-sm">
                {
                    madeOrder?.map((order, index) => (
                        <Madeorderlist order={order} key={index} index={index} />
                    ))
                }
            </div>
        </div>
    )
}

export default Madeorder