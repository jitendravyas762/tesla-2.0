import React from 'react'
import Main from '../../redux/Thunk/Main'
import store from '../../app/store'
import { Provider } from 'react-redux'

function Thunk() {
  return (
    <div>

      <Provider store ={store}>
        <Main/>
      </Provider>
    </div>
  )
}

export default Thunk
