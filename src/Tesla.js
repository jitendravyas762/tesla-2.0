import React from 'react'
import Header from "./Header.js"
import Section from "./Section.js"
import "./Tesla.css"

function Home() {
  return (
    <>
      <Header />
      <Section
        carName="model 3"
        textName="Schedule a Demo Drive"
        backgroundImage="model-3.jpg"
        leftbtn="view inventry"
        rightbtn=" custom Order"
        icon = {true}
      />
      <Section
        carName="model S"
        textName="Schedule a Demo Drive"
        backgroundImage="model-s.jpg"
        leftbtn="view inventry"
        rightbtn=" custom Order"
      />
      <Section
        carName="model Y"
        textName="Schedule a Demo Drive"
        backgroundImage="model-y.jpg"
        leftbtn="view inventry"
        rightbtn=" custom Order"
      />
      <Section
        carName="model X"
        textName="Schedule a Demo Drive"
        backgroundImage="model-x.jpg"
        leftbtn="view inventry"
        rightbtn=" custom Order"
      />
      <Section
        carName="solar roof"
        textName="Schedule a Demo Drive"
        backgroundImage="solar-roof.jpg"
        leftbtn="view inventry"
        rightbtn=" custom Order"
      />
      <Section
        carName="solar panel"
        textName="Schedule a Demo Drive"
        backgroundImage="solar-panel.jpg"
        leftbtn="view inventry"
        rightbtn=" custom Order"
      />
      <Section
        carName="Accessories"
        backgroundImage="accessories.jpg"
        rightbtn=" custom Order"
        blackbg={true}
      />


    </>
  )
}

export default Home
