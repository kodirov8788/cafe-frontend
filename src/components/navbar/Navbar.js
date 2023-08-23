import React, { useContext } from 'react'
import './Navbar.css'
import { ProductContext } from '../../context/ProductContext'
import img1 from "../../image/shopping-cart.png"
import { Link } from 'react-router-dom'
function Navbar() {
    const { cart } = useContext(ProductContext)
    return (
        <div className='navbar'>
            <h1>CAFE</h1>
            <nav>
                <ul>
                    <li><Link to="/products/issiq">issiq ichimlik</Link></li>
                    <li><Link to="/products/gazsiz">gazsiz ichimlik</Link></li>
                    <li><Link to="/products/gazlik">gazlik ichimlik</Link></li>
                    <li>
                        <Link to="/products/taomlar">taomlar</Link>
                    </li>
                </ul>
            </nav>

            <div className="navbar_cart">
                <Link to="/order">zakazlar</Link>
                <Link to="/madeorder">Made order</Link>
                <Link to="/cart">
                    <img className='img1' src={img1} alt="" />
                    <span>{cart.length}</span>
                </Link>

            </div>

        </div>
    )
}

export default Navbar