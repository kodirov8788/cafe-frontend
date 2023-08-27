import axios from '../../api/Api'
import React from 'react'

function Orderlist({ order, index }) {


    const deleteOrder = async () => {
        await axios.delete(`order/delete/${order._id}`)
            .then(res => console.log(res))
            .catch(error => console.log(error))
    }

    const madeProduct = async () => {
        console.log(order._id)
        await axios.put(`order/made/${order._id}`)
            .then(res => console.log(res))
            .catch(error => console.log(error))
    }
    return (
        <div className="">
            <h1>{index + 1}</h1>
            <li>{order.tablenumber} va  {order.waitername}</li>

            {order.order?.map((order2, inx) => (
                <div className="" key={inx}>
                    {order2.name}
                </div>
            ))}

            <button onClick={() => madeProduct()} type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center   h-[50px]">Toyyor</button>
            <br />
            {/* <button onClick={() => deleteOrder()} className='order_delete'></button> */}
            <button onClick={() => deleteOrder()} type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center   h-[50px]">Delete Order</button>
        </div>
    )
}

export default Orderlist