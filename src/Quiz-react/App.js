import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import Register from './Register'
import Question from './Question'
import Score from './Score'
import { useContext } from 'react'
import { createContext } from 'react'
import { useState } from 'react'
export const quizcontext=createContext(null)

function App() {
  const [score,setscore]=useState(0)
  const[wrong,setwrong]=useState([])
  return (
    <>
    <quizcontext.Provider value={{
      score,setscore,wrong,setwrong}}>
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route path="/" element={<Home/>}></Route>
      <Route path="/home" element={<Home/>}></Route>
      <Route path="/register"element={<Register/>}></Route>
      <Route path="/question"element={<Question/>}></Route>
      <Route path="/score"element={<Score/>}></Route>
      </Routes>
      </BrowserRouter>
      </quizcontext.Provider>
      </>
  )
}

export default App

