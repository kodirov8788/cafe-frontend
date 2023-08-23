import { Outlet } from 'react-router-dom';
import './App.css';
import Menu from './components/menu/Menu';
import { useContext } from 'react';
import { ProductContext } from './context/ProductContext';
import ReactLoading from "react-loading";
function App() {
  const { addOrder } = useContext(ProductContext)
  // console.log(producttDate);

  return (
    <div className="App">
      <Menu />
      <Outlet />

      {/* <ReactLoading  className='loading' type={"spokes"} color='black' width={300} height={300} /> */}

      <button onClick={addOrder}>Zakaz berish</button>
    </div>
  );
}

export default App;
