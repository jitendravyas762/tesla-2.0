import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from '../../features/Thunkaxios/ThunkSlice'

function Main() {

    const dispatch = useDispatch()
    const init = useSelector((state)=>{
        return state.Thunk
    })

    useEffect(()=>{
        dispatch(fetchData())
    },[dispatch])

  return (
    <div>
      {
        init.fetchproduct && init.fetchproduct.map((p)=>{
            return(
                <div>
                    <img src={p.image} alt=''></img>
                    <h1>{p.title}</h1>
                    <h2>{p.price}</h2>
                </div>
            )
        })
      }
    </div>
  )
}

export default Main
