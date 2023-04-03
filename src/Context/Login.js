import React, { useState } from 'react'
import {useNavigate } from 'react-router-dom'

function Login() {
    const Navigate=useNavigate()
    const[createuser,setcreateuser]=useState(false)
    const[username,setusername]=useState('')
    const[useremail,setuseremail]=useState('')
    const[userpassword,setuserpassword]=useState('')
    function handlersubmit(e){
        e.preventDefault()
        const savedetails=JSON.parse(localStorage.getItem("userdetails"));
        console.log(savedetails.details)
        if(userpassword===savedetails.details.password && 
           username===savedetails.details.name &&
           useremail===savedetails.details.email
            ){
                Navigate("/")
            }
            else{
                setcreateuser(alert("worning! userdetails is wrong"))
            }


    }

  return (
    <div className='form1'>
       {createuser&&<h1>{createuser}</h1>}
    <form onSubmit={handlersubmit}>
    <div>
        <input type="text" placeholder='Enter your name' value={username} onChange={(e)=>setusername(e.target.value)}></input>
    </div>
    <div>
    <input type="email" placeholder='Enter your email' value={useremail} onChange={(e)=>setuseremail(e.target.value)}></input>
    </div>
    <div>
        <input type="password" placeholder='Enter your password' value={userpassword} onChange={(e)=>setuserpassword(e.target.value)}></input>
    </div>
    <div>
        <button type="submit">Register</button>
    </div>
    </form>
    </div>
   
  )
}

export default Login
