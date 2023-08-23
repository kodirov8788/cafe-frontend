import React from 'react'
import './Menu.css'
import { Link } from 'react-router-dom'
// import { stol } from '../../Static_data'
import { useContext } from 'react'
import { ProductContext } from '../../context/ProductContext'
function Menu() {
    const { setPlace, places } = useContext(ProductContext)

    // console.log(place);
    return (
        <div className='Menu'>

            <select className='select_stol' onChange={(e) => setPlace(e.target.value
            )}>
                <option value="">Joy tanlash</option>
                {
                    places.map(item => (
                        <option value={item.value} key={item.id}>{item.name}</option>
                    ))
                }
            </select>

            <div className="menu">
                <Link to="/products/issiq">issiq ichimlik</Link>
                <Link to="/products/gazlik">gazlik ichimlik</Link>
                <Link to="/products/gazsiz">gazsiz ichimlik</Link>
                <Link to="/products/taomlar">taomlar</Link>
            </div>

        </div>
    )
}

export default Menu