import React from 'react'
import { useContext } from 'react'
import { ProductContext } from '../context/ProductContext'
function SelectPlace() {
    const { setPlace, places } = useContext(ProductContext)

    return (
        <select onChange={(e) => setPlace(e.target.value)} id="place" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 h-[50px] dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option value="">Joy tanlash</option>
            {
                places.map(item => (
                    <option value={item.value} key={item.id}>{item.name}</option>
                ))
            }
        </select>

    )
}

export default SelectPlace