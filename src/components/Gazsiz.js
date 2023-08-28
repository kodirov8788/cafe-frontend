import React, { useEffect, useState } from 'react'
// import './Gazsiz.css'
// import img1 from "../../image/shopping-cart.png"
import { menu_items } from '../Static_data';
// import { Link } from 'react-router-dom';
import Listitem from './Listitem';
function Gazsiz() {
    const [data, setData] = useState([])
    // console.log(data);
    useEffect(() => {

        const getData = () => {


            let gazsizIchimlik = menu_items.filter(drink => drink.category === "gazsiz ichimlik")
            setData(gazsizIchimlik)
        }
        getData()
    }, [])
    return (
        <div className='shadow-md m-auto w-[92%]  h-[50vh] my-5 rounded-lg overflow-auto'>
            <div className="p-3 bg-blue-600 font-bold text-xl text-center mb-3 text-white">
                <h1>Gazsiz ichimlik</h1>
            </div>
            <ul>
                {
                    data.map(item => (
                        <Listitem product={item} key={item.id} />
                    ))
                }
            </ul>

        </div>
    )
}

export default Gazsiz