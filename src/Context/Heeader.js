import React from 'react'
import { NavLink } from 'react-router-dom'


function Heeader() {
  return (
    <div className='header'>
      <h1>Form-Login-Register</h1>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/login">Login</NavLink></li>
        <li><NavLink to="/register">Register</NavLink></li>
      </ul>
    </div>
  )
}

export default Heeader
