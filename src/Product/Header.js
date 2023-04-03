import React,{useContext}from 'react'
import {EcommerceContext} from"./Main.js"
import { Link } from 'react-router-dom'

function Header() {

  const {cart,setCart} = useContext(EcommerceContext)
  return (
    <div>
        <div className='header'>
            <h1>Products</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/cart">Cart:0<span>{cart ?.length}</span></Link></li>
            </ul>
        </div>
      
    </div>
  )
}

export default Header
