import React, { useEffect, useState } from 'react'
import './Gazsiz.css'
// import img1 from "../../image/shopping-cart.png"
import { menu_items } from '../../Static_data';
// import { Link } from 'react-router-dom';
import Listitem from '../listItem/Listitem';
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
        <div className='Products'>
            <div className="icon">
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