import React from 'react'
import Fade from 'react-reveal/Fade';
function Section(props) {

  return (
    <div className='contant' style={{ backgroundImage: `url('images/${props.backgroundImage}')` }}>
      <div className="section">
      <Fade right>
        <div class="h1">
          <h1>{props.carName}</h1>
          <h3>{props.textName}</h3>
        </div>
        </Fade>
        <Fade left>
        <div className="anchor">
          {props.leftbtn && <a href="">{props.leftbtn}</a>}
          <a href="" className={props.blackbg ? "black" : ""}>{props.rightbtn}</a>
          <div className='img'>
            {props.icon && <img src="images/down-arrow.svg" alt=""></img>}
          </div>
        </div>
        </Fade>
      </div>
    </div>
  )
}

export default Section
