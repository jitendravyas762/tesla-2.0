import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { inc,dec } from '../features/counterfeature/counterslice'


function Counter() {
    const number=useSelector((state)=>
        state.count.value

    )
    const dispatch = useDispatch()
  return (
    <div>
      <button onClick={()=>dispatch(inc())}>inc</button>
      <p>{number}</p>
      <button onClick={()=>dispatch(dec())}>dec</button>
    </div>
  )
}

export default Counter
