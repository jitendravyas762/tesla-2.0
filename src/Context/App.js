import { SingleBed } from '@mui/icons-material'
import React, { createContext, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from '../Product/Header'
import Home from './Home'
import Singleblog from './Singleblog'
import Heeader from './Heeader'
import About from './About'
import Register from './Register'
import Login from './Login'
import  './Login.css'

export const EcommerceContext=createContext(null)


function App() {
  const [data, setdata] = useState([])
  const[form,setform]=useState([])
   
  return (
    <EcommerceContext.Provider value={{data,setdata,form, setform}}>
    <BrowserRouter>
    <Heeader/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/blog/:id" element={<Singleblog/>}></Route>
      <Route path="/" element={<Heeader/>}></Route>
      <Route path="/About" element={<About/>}></Route>
      <Route path="/register" element={<Register/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      
      </Routes>
      </BrowserRouter>
      </EcommerceContext.Provider>
  
  )
}

export default App
