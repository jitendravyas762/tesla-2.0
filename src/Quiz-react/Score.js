
import React, { useContext, useEffect } from 'react'
import { quizcontext } from './App'

function Score() {
  const { score , setscore} = useContext(quizcontext)
  const { wrong , setwrong } = useContext(quizcontext)


  return (
    <div className='score'>
      <h1>Correct Answer : {score}</h1>
      <div className='wrongans'>
      <h1>Wrong Answers : </h1>
      {
        wrong.map((element, index) => {
          return (
            <div className='wrong' key={index}>
              <p>{element.question}</p>
              <ul>
                <li>{element.a}</li>
                <li>{element.b}</li>
                <li>{element.c}</li>
                <li>{element.d}</li>
              </ul>
              <h3> correct Answer : {element.answer}</h3>
            </div>
          )
        })
      }
      </div>
      

    </div>

  )
}

export default Score
