import React, { useEffect, useState } from 'react'
import axios from "axios"




function Axios() {
    // const[setdate,opendate]=useState([])
    // axios.get("https://dummyjson.com/products")
    //     .then((responce) => {
    //          console.log(responce.data)
    //          opendate(responce.data)
    //          })

    const [setdate, opendate] = useState([])
    useEffect(() => {

        // axios.get("https://dummyjson.com/products")
        //     .then((responce) => {
        //         console.log(responce.data)
        //         opendate(responce.data.products)
        //     })


        async function fetchdata(){
        
            const responce=await axios.get("https://dummyjson.com/products")
            opendate(responce.data.products)
        }
        fetchdata()

    }, [])
    return (
        <div className="axios">
            {
                setdate.map((element, index) => {
                    return (<>
                    <img src={element.images[0]} alt=""></img>
                        <h1 key={index}>{element.title}</h1>
                        <p>{element.description}</p>
                        <h5>{element.price}</h5>
                        <h5>{element.discountPercentage}</h5>

                    </>
                    )
                })
            }
        </div>
    )
}

export default Axios
