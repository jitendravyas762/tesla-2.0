
import React, { useEffect, useState } from 'react'
import Home from './Home'

function Register() {
    const[name,setname]=useState('')
    const[email,setemail]=useState('')
    const[password,setpassword]=useState('')
    const[user,setuser]=useState([])
    const [go, setgo] = useState(true)

    useEffect(()=>{
        localStorage.setItem("userdetails",JSON.stringify(user))
    },[user])

    useEffect(()=>{
         const getdetails=JSON.parse(localStorage.getItem("userdetails"))
        // setuser(getdetails)
    },[])

    function registerhendler(e){
        e.preventDefault()
        // console.log(name,email,password) 
        const userdetails={
            name:name,
            email:email, 
            password:password
        }  
        setuser([...user,userdetails])
        alert("user register succesfully")  
        setgo(false)   

    }
    if(go){
  return (
    <div>
      <form onSubmit={registerhendler}>
        <input type='text' placeholder='enter your name' required autoFocus  value={name}  onChange={(e)=>setname(e.target.value)}></input><br/>
        <input type='email' placeholder='enter your email' required autoFocus value={email}  onChange={(e)=>setemail(e.target.value)}></input><br/>
        <input type='password'placeholder='enter your password' required value={password} onChange={(e)=>setpassword(e.target.value)}></input><br/>
        <button type='submit'>Register</button>
      </form>
    </div>
  )
}

else{
    return(
        <Home/>
    )
}
}


export default Register
