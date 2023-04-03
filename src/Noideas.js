import React, { useState } from 'react'
import "./Noidea.css"

function Noideas() {

  const [active, sethalf] = useState('0');
  function half(count) {
    sethalf(count)



  }
  return (
    <div className="main">
      <div class="main1">
        <div className="anchor">
          <a class="active" href="#" onClick={(e) => { e.preventDefault(); half(0) }} className={active === "0" ? "active" : ""}>REACT JS</a>
          <a href="#" onClick={(e) => { e.preventDefault(); half(1) }} className={active === "1" ? "active" : ""}>NODE JS</a>
          <a href="#" onClick={(e) => { e.preventDefault(); half(2) }} className={active === "2" ? "active" : ""}>MANGO</a>
          <a href="#" onClick={(e) => { e.preventDefault(); half(3) }} className={active === "3" ? "active" : ""}>VUE JS</a>
        </div>
        <div className="para">
          <p class="con active" className={active === 0 ? "con active" : "con"}>HTML: we're meticulous about our implementation of Material Design, ensuring that every Material UI component meets the highest standards of form and function, but diverge from the official spec where necessary to provide multiple great options.</p>
          <p class="con" className={active === 1 ? "con active" : "con"}>CSS: we're meticulous about our implementation of Material Design, ensuring that every Material UI component meets the highest standards of form and function, but diverge from the official spec where necessary to provide multiple great options.</p>
          <p class="con" className={active === 2 ? "con active" : "con"} >JAVA: we're meticulous about our implementation of Material Design, ensuring that every Material UI component meets the highest standards of form and function, but diverge from the official spec where necessary to provide multiple great options.</p>
          <p class="con" className={active === 3 ? "con active" : "con"}>VUE: we're meticulous about our implementation of Material Design, ensuring that every Material UI component meets the highest standards of form and function, but diverge from the official spec where necessary to provide multiple great options.</p>
        </div>
      </div>

    </div>
  )
}

export default Noideas
