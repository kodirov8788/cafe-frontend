import axios from '../../api/Api'
import React, { useContext, useEffect, useState } from 'react'
import { ProductContext } from '../../context/ProductContext'
import Madeorderlist from './Madeorderlist'

function Madeorder() {
    const [data, setData] = useState([])
    const { messages } = useContext(ProductContext)
    console.log("madeorder", data)
    useEffect(() => {

        const getApi = async () => {
            await axios.get("order/get")
                .then(res => {

                    let filtered = res?.data.filter(item => item.isready === true)
                    setData(filtered)

                })
                .catch(error => console.log(error))
        }
        getApi()
    }, [messages])
    return (
        <div>
            <h1>Tayyor bo'lganlari</h1>

            <div className="">
                {
                    data?.map((order, index) => (

                        <Madeorderlist order={order} key={index} index={index} />

                    ))
                }
            </div>
        </div>
    )
}

export default Madeorder