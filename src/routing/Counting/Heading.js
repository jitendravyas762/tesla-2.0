import React from 'react'
import {Link} from "react-router-dom"

function Heading() {
  return (
    <div className='heading'>
        <h1>responsive<span> web design</span></h1>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact us">contact us</Link></li>
        </ul>
      
    </div>
  )
}

export default Heading
