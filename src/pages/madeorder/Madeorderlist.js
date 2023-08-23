// import axios from 'axios'
import axios from '../../api/Api'
import React from 'react'

function Madeorderlist({ order, index }) {


    const deleteOrder = async () => {
        return await axios.delete(`order/delete/${order._id}`)
            .then(res => console.log(res))
            .catch(error => console.log(error))
    }

    // const madeProduct = async () => {
    //     console.log(order._id)
    //     await axios.put(`http://localhost:8000/order/made/${order._id}`)
    //         .then(res => console.log(res))
    //         .catch(error => console.log(error))
    // }
    return (
        <div className="madeorder">
            <h1>{index + 1}</h1>
            <li>{order.tablenumber} va  {order.waitername}</li>

            {order?.order?.map((order2, inx) => (
                <div className="" key={inx}>
                    {order2.name}
                </div>
            ))}
            <button onClick={deleteOrder}>Zakazni o'chirish</button>
        </div>
    )
}

export default Madeorderlist