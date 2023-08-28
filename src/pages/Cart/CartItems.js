import React, { useContext, useEffect } from 'react'
import { ProductContext } from '../../context/ProductContext'
import { BsTrash3 } from "react-icons/bs"
import { useNavigate } from 'react-router-dom'
function CartItems({ item }) {
    const { setCart, cart } = useContext(ProductContext)
    const navigation = useNavigate()


    // const addCart = (item) => {
    //     setCart([...cart, item])
    // }


    const removeCard = (item) => {
        let filtered1 = cart.filter(pro => pro.id === item.id).splice(1)
        let filtered2 = cart.filter(pro => pro.id !== item.id)
        setCart([...filtered1, ...filtered2])
        if (cart.length < 2) {
            navigation('/')
            window.location.reload()

        }
    }



    return (

        <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {item[0]?.name}
                </th>
                <td className="px-6 py-4">
                    {item?.length}
                </td>
                <td className="px-6 py-4 text-right text-red-600" onClick={() => removeCard(item[0])}>
                    <BsTrash3 />
                </td>
                <td className="px-6 py-4">
                    {item[0]?.price}
                </td>
                <td className="px-6 py-4">
                    {item?.length}
                </td>
                <td className="px-6 py-4 text-right">
                    {item[0]?.price * item?.length}
                </td>

            </tr>

        </tbody>

    )
}

export default CartItems