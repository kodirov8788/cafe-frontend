// import axios from 'axios'
import axios from '../../api/Api'
import React, { useContext, useEffect, useState } from 'react'
import { ProductContext } from '../../context/ProductContext'
import { toast } from 'react-toastify'

function Madeorderlist({ order, index }) {
    const { setLoading, setSensor, sensor } = useContext(ProductContext)



    const [orderData, setOrderData] = useState([])
    console.log(orderData)

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
        setLoading(true)
        return await axios.post(`order/delete/${order._id}`)
            .then(res => {
                setLoading(false)
                setSensor(true)
                console.log(res)
                toast.success(`${res.data.tablenumber} o'chirildi.`, {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 3000,
                });
            })
            .catch(error => {
                setLoading(false)
                console.log(error)
            })
    }

    // const madeProduct = async () => {
    //     console.log(order._id)
    //     await axios.post(`http://localhost:8000/order/made/${order._id}`)
    //         .then(res => console.log(res))
    //         .catch(error => console.log(error))
    // }


    const totalPrice = () => {
        let numbers = order?.order.map(a => a.price)
        let all = numbers.reduce((a, b) => a + b, 0)
        return all
    }
    return (
        <div className="flex flex-col  rounded-md overflow-hidden text-white">
            <div className="flex justify-around bg-blue-500">
                <h4 className="text-2xl font-bold dark:text-white text-center py-2">{order.tablenumber} </h4>
                <h4 className="text-2xl font-bold dark:text-white text-center py-2">{totalPrice()} so`m</h4>

            </div>

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg  overflow-y-auto">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Ro'yhat
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Soni
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Narxi
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

            <button onClick={deleteOrder} type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center  h-[50px] mt-3 mb-3 ">Zakazni o'chirish</button>
        </div>
    )
}

export default Madeorderlist