import React, { useContext } from 'react'
import { ProductContext } from '../../context/ProductContext'
import { BsTrash3 } from "react-icons/bs"
function CartItems({ item }) {
    // const { setCart, cart } = useContext(ProductContext)

    // console.log(cart)

    // const addCart = (item) => {
    //     setCart([...cart, item])
    // }
    // const removeCard = (item) => {
    //     let filtered1 = cart.filter(pro => pro.id === item.id).splice(1)
    //     let filtered2 = cart.filter(pro => pro.id !== item.id)
    //     setCart([...filtered1, ...filtered2])

    // }
    return (
        // <li className='list_item_cart'>
        //     <div className="btns_group_cart">
        //         <h3 className='list_item_title_cart'>{item[0]?.name}  </h3>
        //         <h3>{item?.length}</h3>=<h3>{item[0]?.price}</h3> * <h3>{item?.length}</h3> = <h3>{item[0]?.price * item?.length}</h3>

        //     </div>


        // </li>


        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {item[0]?.name}
                </th>
                <td class="px-6 py-4">
                    {item?.length}
                </td>
                <td class="px-6 py-4 text-right text-red-600">
                    <BsTrash3 />
                </td>
                <td class="px-6 py-4">
                    {item[0]?.price}
                </td>
                <td class="px-6 py-4">
                    {item?.length}
                </td>
                <td class="px-6 py-4 text-right">
                    {item[0]?.price * item?.length}
                </td>

            </tr>

        </tbody>

    )
}

export default CartItems