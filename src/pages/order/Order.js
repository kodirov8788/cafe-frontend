import React, { useContext } from 'react'
import Orderlist from './Orderlist'
import { ProductContext } from '../../context/ProductContext'
// import { stol } from '../../Static_data'

function Order() {
    const { orderData } = useContext(ProductContext)


    return (
        <div className='shadow-md w-[92%] mx-auto'>
            <h1 className='font-bold py-3 bg-blue-600 text-white rounded-md mb-5 text-center'>Active zakazlar soni <span className='text-red-600 text-xl ml-3'>{orderData.length}</span> </h1>
            <div className="">
                {
                    orderData?.map((order, index) => (
                        <Orderlist order={order} key={index} index={index} />
                    ))
                }
            </div>
        </div>
    )
}

export default Order