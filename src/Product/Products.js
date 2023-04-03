
import React, { useEffect, useState,useContext } from 'react'
import axios from "axios"
import {EcommerceContext}  from "./Main";

function Products() {
  const {cart, setCart} = useContext(EcommerceContext)
  
    function handleraddtocart(e,element){
      e.preventDefault()
      setCart([...cart,element])
      // console.log(cart)
    
    }  


  const [setdate, opendate] = useState([])
  useEffect(() => {

    axios.get("https://fakestoreapi.com/products")
      .then((responce) => {
        console.log(responce.data)
        opendate(responce.data)
      })
  }, [])
  return (
    <div className="axios">
      {
        setdate.map((element, index) => {
          return (<>
            <div className='image'>
              <div className='ram'>
                <img src={element.image} alt=""></img>
              </div>
              <div className='h1'>
                <h1 key={index}>{element.title}</h1>
                <h4>{element.description}</h4>
                <h3>{element.price}</h3>
                <a href='' onClick={(e) => handleraddtocart(e,element)}>add to cart</a>
              </div>
            </div>





          </>
          )
        })
      }
    </div>
  )
}

export default Products
