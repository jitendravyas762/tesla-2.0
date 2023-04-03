import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
   <header>
    <h1>Quiz</h1>
    <Link to="/register"><h2>register</h2></Link>
    <Link to="/"><h2>login</h2></Link>
   </header>
  )
}

export default Header
