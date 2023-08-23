import React, { useContext } from 'react'
import { ProductContext } from '../../context/ProductContext'

function CartItems({ item }) {
    const { setCart, cart } = useContext(ProductContext)

    // console.log(cart)

    const addCart = (item) => {
        setCart([...cart, item])
    }
    const removeCard = (item) => {
        let filtered1 = cart.filter(pro => pro.id === item.id).splice(1)
        let filtered2 = cart.filter(pro => pro.id !== item.id)
        setCart([...filtered1, ...filtered2])

    }
    return (
        <li className='list_item_cart'>
            <div className="btns_group_cart">
                <h3 className='list_item_title_cart'>{item[0].name}  </h3>
                <h3>{item.length}</h3>=<h3>{item[0].price}</h3> * <h3>{item.length}</h3> = <h3>{item[0].price * item.length}</h3>

            </div>
        </li>
    )
}

export default CartItems