import React, { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';

function Header() {

      const[varisu,setmenuopen]=useState(false)

    function Menuopen(e){
        e.preventDefault();
        setmenuopen(true)
      }

      function Open(){
        setmenuopen(false)
      }

  return (
    <div className='header'>
      <img src="images/logo.svg" alt=""></img>
      <ul>
        <li><a href=''>model 3</a></li>
        <li><a href=''>model s</a></li>
        <li><a href=''>model x</a></li>
        <li><a href=''> model y</a></li>
        <li><a href=''>solar roof</a></li>
        <li><a href=''>solar panels</a></li>
      </ul>
      <ul>
        <li><a href=''>shop</a></li>
        <li><a href=''>account</a></li>
        <li><a href="" onClick={Menuopen}>menu</a></li>
      </ul>
      
   
      <ul className='list' style={{ right:(varisu===false) ? "-250px":"0"}}>
      <CloseIcon className='ico'  onClick={Open}/> 


       <li><a href=''>model 3</a></li>
       <li><a href=''>model s</a></li>
       <li><a href=''>model x</a></li>
       <li><a href=''>model y</a></li>
       <li><a href=''>Demo drive</a></li>
       <li><a href=''>Solar roof</a></li>
       <li><a href=''>Solar panel </a></li>
       <li><a href=''>accessories</a></li>
       <li><a href=''>charning</a></li>
       <li><a href=''>find us</a></li>
      </ul>

    </div>

  )
}

export default Header
