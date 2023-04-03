import React, { useContext, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { EcommerceContext } from './App'

function Home() {

  const {data,setdata}=useContext(EcommerceContext);

  useEffect(() => {


    async function home() {
      await axios.get("https://fakestoreapi.com/products")
        .then((responce) => {
          console.log(responce.data)
          setdata(responce.data)
        })
    }
    home()
  }, [])
  return (
    <div className='blog'>
      <h1>blog</h1>
      {
        data.map((post) => {

          return (
            <>
              <div className='div' key={post.id}>
                <h1><Link to={`/blog/${post.id}`}> {post.title}</Link></h1>
                <p>{post.description}</p>
              </div>
            </>
          )
        })
      }
    </div>
  )
}

export default Home
