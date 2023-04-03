import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
    const [name , setname] = useState("")
  const [password , setpassword] = useState("")
  const navigate  = useNavigate()

  function loginsubmit(e){
      e.preventDefault()
      const storeddata = JSON.parse(localStorage.getItem("userdetails"))
      console.log(storeddata)
      const filtereddata = storeddata.filter(data => data.name === name && data.password === password)
      console.log(name)
      console.log(password)
      if(filtereddata.length > 0){
        alert(`Welcome ${name}`)
        navigate("/question")
       }
       else{
         alert("you have entered wrong credentials check your username or password or you should register first")
       } 
    
  
    }

  

  return (
    <div>
      <form onSubmit={loginsubmit}>
        <input type='text' placeholder='enter your name' value={name} onChange={(e)=>setname(e.target.value)}></input><br/>
        <input type='password'placeholder='enter your password' value={password} onChange={(e)=>setpassword(e.target.value)}></input><br/>
        <button type="submit">login</button>
      </form>
    </div>
  )
}

export default Home
