import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

function Singleblog() {
     const{id}=useParams()
    const[apidata,setapidata]=useState([])
    useEffect(()=>{
        async function Singleblog(){
            const responce=    await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
                // .then((responce)=>{
                //         console.log(responce.data)
                //         setapidata(responce.data)
                // })
                console.log(responce.data)
                setapidata(responce.data)

        }
        Singleblog()
    },[])
  return (
    <div>
        {
           <h1>{apidata.title}</h1>
        }

    </div>
  )
}

export default Singleblog
