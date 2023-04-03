import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Heading from "./Counting/Heading.js"
import Home from "./Counting/Home.js"
import About from "./Counting/About.js"
import Blog from "./Counting/Blog.js"
import Contactus from "./Counting/Contact us.js"

function App() {
  return (
    <BrowserRouter>
    <Heading/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/blog" element={<Blog/>}/>
      <Route path="/contact us" element={<Contactus/>}/>
    </Routes>
    </BrowserRouter>
  )
  
}


export default App
