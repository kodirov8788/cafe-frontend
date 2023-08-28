import React, { useContext, useEffect, useState } from 'react'
// import './Taomlar.css'
// import img1 from "../../image/shopping-cart.png"

import { menu_items } from "../Static_data"
import { Link } from 'react-router-dom'
import { ProductContext } from '../context/ProductContext'
import Listitem from './Listitem'

function Taomlar() {
    const [data, setData] = useState([])
    const { setCart, cart } = useContext(ProductContext)
    // console.log(data);
    useEffect(() => {

        const getData = () => {
            let taomlar = menu_items.filter(drink => drink.category === "taomlar")
            setData(taomlar)
        }
        getData()
    }, [])

    return (
        <div className='shadow-md m-auto w-[92%] h-[60vh] my-5 rounded-lg overflow-auto'>
            <div className="p-3 bg-blue-600 font-bold text-xl text-center mb-3 text-white">
                <h1>Taomlar</h1>

            </div>

            <ul className='w-full'>
                {
                    data.map(item => (
                        <Listitem product={item} key={item.id} />
                    ))
                }
            </ul>

        </div>
    )
}

export default Taomlar