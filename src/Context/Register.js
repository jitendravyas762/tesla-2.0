import React, { useContext, useEffect, useState } from 'react'
import { EcommerceContext } from './App'
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

function Register() {
    const{form,setform}=useContext(EcommerceContext)
    const[name,setname]=useState('')
    const[email,setemail]=useState('')
    const[password,setpassword]=useState('')

    useEffect(() =>{
        localStorage.setItem("userdetails",JSON.stringify(form));
    },[form])


    function handlersubmit(e){
        e.preventDefault()
        const details={
            name:name,
            email:email,
            password:password
        };
        setform(
                {...form,details}
        )

    }
   
  return (
   <>
   <form onSubmit={handlersubmit} className="form2">
    <div>
        <input type="text" placeholder='Enter your name' value={name} onChange={(e)=>setname(e.target.value)}></input>
    </div>
    <div>
    <input type="email" placeholder='Enter your email' value={email} onChange={(e)=>setemail(e.target.value)}></input>
    </div>
    <div>
        <input type="password" placeholder='Enter your password' value={password} onChange={(e)=>setpassword(e.target.value)}></input><VisibilityOffIcon/>
    </div>
    <div>
        <button type="submit">Register</button>
    </div>
   </form>
   </>
  )
}




export default Register


