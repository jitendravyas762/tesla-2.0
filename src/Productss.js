import React from 'react'
import Main from './Product/Main.js';
import About from './Product/About.js';
import Cart from './Product/Cart.js';
import Header from './Product/Header.js'
import { BrowserRouter, Routes, Route } from "react-router-dom";





function Productes() {
  return (
    <div>
 <BrowserRouter>
     <Header/>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Productes
