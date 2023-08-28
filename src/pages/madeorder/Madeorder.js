import axios from '../../api/Api'
import React, { useContext, useEffect, useState } from 'react'
import { ProductContext } from '../../context/ProductContext'
import Madeorderlist from './Madeorderlist'

function Madeorder() {
    const { messages, setMadeOrder, madeOrder } = useContext(ProductContext)

    return (
        <div>
            <h1>Tayyor bo'lganlari</h1>

            <div className="">
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