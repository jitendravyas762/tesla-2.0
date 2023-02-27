import React from 'react'

function Section(props) {

  return (
    <div className='contant' style={{ backgroundImage: `url('images/${props.backgroundImage}')` }}>
      <div className="section">
        <div class="h1">
          <h1>{props.carName}</h1>
          <h3>{props.textName}</h3>
        </div>
        <div className="anchor">
          {props.leftbtn && <a href="">{props.leftbtn}</a>}
          <a href="">{props.rightbtn}</a>
          <div className='img'>
            {props.icon && <img src="images/down-arrow.svg" alt=""></img>}
            </div>

        </div>



      </div>
    </div>
  )
}

export default Section
