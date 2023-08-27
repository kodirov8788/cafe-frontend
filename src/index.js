import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Issiq from './components/Issiq';
import Gazlik from './components/Gazlik';
import Gazsiz from './components/Gazsiz';
import Taomlar from './components/Taomlar';
import Cart from './pages/Cart/Cart';
import { ContextProvider } from './context/ProductContext';
import Order from './pages/order/Order';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
// import Pushers from './Pushers';
import Madeorder from './pages/madeorder/Madeorder';
import Header from './components/Header';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ContextProvider>
        <ToastContainer />
        <Header />


        <Routes>
          <Route path='/' element={<App />}>
            <Route path='products/issiq' element={<Issiq />} />
            <Route path='products/gazlik' element={<Gazlik />} />
            <Route path='products/gazsiz' element={<Gazsiz />} />
            <Route path='products/taomlar' element={<Taomlar />} />
          </Route>
          <Route path='order' element={<Order />} />
          <Route path='cart' element={<Cart />} />
          <Route path='madeorder' element={<Madeorder />} />
          {/* <Route path='pusher' element={<Pushers />} /> */}
        </Routes>
      </ContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
