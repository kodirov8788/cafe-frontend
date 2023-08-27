import React, { useContext } from 'react'
import { ProductContext } from '../context/ProductContext'
import { toast } from 'react-toastify';
function Listitem({ product }) {
    const { setCart, cart, place } = useContext(ProductContext)

    // console.log(cart)

    const addCart = (item) => {
        if (!place) {
            setCart([])
            toast.warning("Joyni tanglang!", {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 2000,
            });
        } else {
            setCart([...cart, item])
        }
    }


    const removeCard = (item) => {
        let filtered1 = cart.filter(pro => pro.id === item.id).splice(1)
        let filtered2 = cart.filter(pro => pro.id !== item.id)
        setCart([...filtered1, ...filtered2])

    }

    const Filtered = ({ carts }) => {
        let filtered = carts.filter(pro => pro.id === product.id)
        return <h3>{filtered.length}</h3>
    }
    return (
        // <li className='list_item'>
        //     <span className='list_item_title'>{product.name}</span>
        //     <div className="btns_group">
        //         <button className='plus' onClick={() => removeCard(product)}>-</button>
        //         <Filtered carts={cart} />
        //         <button className='plus' onClick={() => addCart(product)}>+</button>
        //     </div>



        //     {/* <button onClick={() => hundleProduct(product)}>tanlash</button> */}

        // </li>



        <li class="pb-3 sm:pb-4 flex justify-between px-5">
            <div class="flex items-center space-x-4">
                <div class="flex-shrink-0">
                    <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Neil image" />
                </div>
                <div class="flex-1 min-w-0">
                    <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                        {product.name}
                    </p>
                    <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                        {product.price} so'm
                    </p>
                </div>

            </div>
            <div className="btns_group">
                <button className='plus' onClick={() => removeCard(product)}>-</button>
                <Filtered carts={cart} />
                <button className='plus' onClick={() => addCart(product)}>+</button>
            </div>

        </li>


    )
}

export default Listitem