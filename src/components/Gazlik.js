import { useEffect, useState } from 'react';
// import './Gazlik.css'
// import img1 from "../../image/shopping-cart.png"
import { menu_items } from "../Static_data"
// import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';
import Listitem from './Listitem';
function Gazlik() {
    const { setCart, cart } = useContext(ProductContext)

    // console.log(cart);

    const [data, setData] = useState([])
    // console.log(data);
    useEffect(() => {

        const getData = () => {
            let gazlikIchimlik = menu_items.filter(drink => drink.category === "gazlik ichimlik")
            setData(gazlikIchimlik)
            console.log(gazlikIchimlik.id);
        }
        getData()
    }, [])

    const hundleProduct = (product) => {
        setCart([...cart, product])
    }
    return (
        <div className='border-2 border-black  m-auto w-[92%] h-[60vh] my-5'>
            <div className="icon">
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