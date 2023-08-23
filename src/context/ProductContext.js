import { useEffect, useState } from "react";

import { createContext } from "react";
import Pusher from 'pusher-js';
import MP3 from "../mp33.mp3"
import { useNavigate } from "react-router-dom";
import axios from "../api/Api";
import { toast } from "react-toastify";
import { stol } from "../Static_data";


export const ProductContext = createContext()
export const ContextProvider = ({ children }) => {

    const [messages, setMessages] = useState([]);
    const [places, setPlaces] = useState([]);
    const [data, setData] = useState([])


    useEffect(() => {

        const getApi = async () => {
            try {
                const res = await axios.get("/order/get");
                const box = res?.data.map(item => item.tablenumber);

                const filteredTable = stol.filter(item => {
                    return !box.some(boxItem => boxItem === item.value);
                });
                setPlaces(filteredTable);

                const filteredData = res?.data.filter(item => item.isready === false);
                setData(filteredData);
            } catch (error) {
                console.log(error);
            }
        };
        getApi();
    }, [messages])
    // console.log(places)

    useEffect(() => {
        const pusher = new Pusher('4aed833cb4657d97c07e', {
            cluster: 'ap2',
            encrypted: true,
        });

        const channel = pusher.subscribe('chat-channel');
        channel.bind('new-message', (data) => {
            setMessages([...messages, data]);
            playNotificationSound();
        });

        return () => {
            channel.unbind_all();
            channel.unsubscribe();

        };
    }, [messages]);

    const playNotificationSound = () => {
        const audio = new Audio(MP3);
        audio.play();
    }

    const [producttDate, setproducttDate] = useState('maxsulot')
    const [cart, setCart] = useState([])
    const [place, setPlace] = useState("")




    const [user, setUser] = useState({
        username: "Zilola11",
        name: "zilllola",
        role: "user",
        gender: "femele"
    })

    const navigate = useNavigate()

    console.log(cart);
    // console.log(cart);

    useEffect(() => {
        async function findDuplicateUsers() {
            const phoneNumberGroups = await cart.reduce((acc, user) => {
                if (!acc[user.id]) {
                    acc[user.id] = [];
                }
                acc[user.id].push(user);
                return acc;
            }, {});

            const duplicates = [];
            const singlebox = [];
            for (const phoneNumber in phoneNumberGroups) {
                if (phoneNumberGroups[phoneNumber].length > 1) {
                    duplicates.push(phoneNumberGroups[phoneNumber]);
                } else {
                    singlebox.push(phoneNumberGroups[phoneNumber]);
                }
            }

            return [...duplicates, ...singlebox];
        }

        findDuplicateUsers()
            .then(user => setData(user))
            .catch(error => console.log(error))
    }, [cart]);


    const addOrder = async () => {
        const newObj = {
            ordernumber: 11,
            waitername: user.username,
            tablenumber: place,
            order: cart,
        }
        console.log(newObj)
        await axios.post("order/create", newObj)
            .then(res => {
                toast.success("muvaffaqiyatli joylandi", {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 2000,
                });
                setCart([])
                setPlace("")
                navigate("/order")

            })
            .catch(error => {
                console.log(error)
                toast.error("serverda xatolik bor", {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 2000,
                });
            })

    }




    let contextData = { setPlaces, places, producttDate, setproducttDate, cart, setCart, place, setPlace, user, messages, setData, data, addOrder }
    return <ProductContext.Provider value={contextData}>{children}</ProductContext.Provider>
}