import { useEffect, useState } from 'react';
// import './Gazlik.css'
// import img1 from "../../image/shopping-cart.png"
import { menu_items } from "../Static_data"
// import { Link } from 'react-router-dom';
import Listitem from './Listitem';
function Gazlik() {
    const [data, setData] = useState([])
    // console.log(data);
    useEffect(() => {
        const getData = () => {
            let gazlikIchimlik = menu_items.filter(drink => drink.category === "gazlik ichimlik")
            setData(gazlikIchimlik)
        }
        getData()
    }, [])


    return (
        <div className='shadow-md m-auto w-[92%] h-[60vh] my-5 rounded-lg overflow-auto'>
            <div className="p-3 bg-blue-600 font-bold text-xl text-center mb-3 text-white">
                <h1>Gazlik ichimlik</h1>
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

export default Gazlik