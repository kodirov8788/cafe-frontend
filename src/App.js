import { Link, Outlet, useLocation } from 'react-router-dom';
import './App.css';
import { useContext, useEffect, useState } from 'react';
import { ProductContext } from './context/ProductContext';
import ReactLoading from "react-loading";
import SelectPlace from './components/SelectPlace';
import Hotdrinks from "./image/hot_drinks.jpeg"
import Gazlik from "./image/gazlik.webp"
import Gazsiz from "./image/gazsiz.jpeg"
import Plov from "./image/plov.jpeg"
function App() {
  const { addOrder } = useContext(ProductContext)
  const [menuState, setMenuState] = useState(false)
  let pathname = useLocation().pathname
  // console.log(producttDate);
  // console.log(menuState)
  useEffect(() => {

    setMenuState(false)

  }, [pathname])


  return (
    <div className="flex flex-col">

      <div className="flex items-center justify-between w-[92%] m-auto gap-x-2">
        <button onClick={() => setMenuState(!menuState)} type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5  text-center w-1/2  h-[50px]">
          <h2>MENU</h2>
          <p className='text-red-500'>{menuState ? "Close" : "Open"}</p>
        </button>
        <SelectPlace />

      </div>

      {menuState ? <div className="grid grid-cols-2 gap-3 p-3">
        <Link to={'/products/issiq'} type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center w-full "  >
          <img className='w-[50px] h-[50px] object-cover mr-5' src={Hotdrinks} alt="" />
          Issiq Ichimlik

        </Link>
        <Link to={'/products/gazlik'} type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center w-full"  >
          <img className='w-[50px] h-[50px] object-cover mr-5' src={Gazlik} alt="" />
          Gazlik Ichimlik

        </Link>
        <Link to={'/products/gazsiz'} type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center w-full"  >
          <img className='w-[50px] h-[50px] object-cover mr-5' src={Gazsiz} alt="" />
          Gazsiz Ichimlik

        </Link>
        <Link to={'/products/taomlar'} type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center w-full">
          <img className='w-[50px] h-[50px] object-cover mr-5' src={Plov} alt="" />
          Taomlar
        </Link>
      </div> : <></>}



      <Outlet />


      <button onClick={addOrder} type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-lg px-5 py-2.5 text-center   h-[50px] w-[92%] mx-auto my-3">Zakaz berish</button>
      {/* <ReactLoading  className='loading' type={"spokes"} color='black' width={300} height={300} /> */}


    </div>
  );
}

export default App;
