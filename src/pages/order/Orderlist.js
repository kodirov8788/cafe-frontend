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

            <button onClick={() => madeProduct()}>Toyyor</button>
            <br />
            <button onClick={() => deleteOrder()} className='order_delete'>Delete Order</button>
        </div>
    )
}

export default Orderlist