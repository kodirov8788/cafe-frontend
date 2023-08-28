import axios from '../../api/Api'
import React, { useEffect, useState } from 'react'
import { BsTrash3 } from "react-icons/bs"

function Orderlist({ order }) {
    const [orderData, setOrderData] = useState([])
    // console.log(orderData)

    useEffect(() => {
        async function findDuplicateUsers() {
            const orderGroup = await order?.order?.reduce((acc, orderss) => {
                if (!acc[orderss.id]) {
                    acc[orderss.id] = [];
                }
                acc[orderss.id].push(orderss);
                return acc;
            }, {});

            const duplicates = [];
            const singlebox = [];
            for (const eachOrder in orderGroup) {
                if (orderGroup[eachOrder].length > 1) {
                    duplicates.push(orderGroup[eachOrder]);
                } else {
                    singlebox.push(orderGroup[eachOrder]);
                }
            }

            return [...duplicates, ...singlebox];
        }

        findDuplicateUsers()
            .then(user => setOrderData(user))
            .catch(error => console.log(error))
    }, []);


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
        <div className="border mb-5 ">
            <li className='list-none bg-blue-600 px-3 py-2 text-center rounded-md text-white font-bold'>{order.tablenumber}, {order.waitername}</li>

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg  overflow-y-auto">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Ro'yhat
                            </th>
                            <th scope="col" className="px-6 py-3">
                                soni
                            </th>
                            <th scope="col" className="px-6 py-3">
                                o'chirish
                            </th>


                        </tr>
                    </thead>

                    {orderData?.map((ord, inx) => (
                        <tbody key={inx}>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {ord[0]?.name}
                                </th>
                                <td className="px-6 py-4">
                                    {ord?.length}
                                </td>

                                <td className="px-6 py-4 text-right">
                                    {ord[0]?.price * ord?.length}
                                </td>

                            </tr>

                        </tbody>
                    ))}

                </table>
            </div>

            <div className="flex rounded-md shadow-sm mx-auto mt-3 w-[92%] mb-3" role="group">
                <button type="button" onClick={() => madeProduct()} className="inline-flex items-center px-4 py-2 text-sm font-medium  bg-transparent border border-gray-900 rounded-l-lg hover:bg-gray-900 hover:text-white  dark:border-white text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700 bg-blue-600">
                    <svg className="w-4 h-4 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    Toyyor
                </button>
                <button type="button" className="inline-flex items-center px-4 py-2 text-sm font-medium bg-transparent border-t border-b border-gray-900 hover:bg-gray-900 hover:text-white  dark:border-white text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700 bg-blue-600">
                    <svg className="w-3 h-3 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 12.25V1m0 11.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M4 19v-2.25m6-13.5V1m0 2.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M10 19V7.75m6 4.5V1m0 11.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM16 19v-2" />
                    </svg>
                    Edit
                </button>
                <button onClick={() => deleteOrder()} type="button" className="inline-flex items-center px-4 py-2 text-sm font-medium bg-transparent border border-gray-900 rounded-r-md hover:bg-gray-900 hover:text-white  dark:border-white text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700 bg-blue-600">
                    <BsTrash3 className='mr-2' />
                    Delete Order
                </button>
            </div>

        </div>
    )
}

export default Orderlist