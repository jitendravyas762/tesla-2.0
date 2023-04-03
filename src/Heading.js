import React,{useState} from 'react'
import AddIcon from '@mui/icons-material/Add';
import "./Heading.css"

function Heading() {
   
    return (
        <div className="headingss">
        <div className="heading">
            <div class="tab">
                <h1>Accordion Heading 1<AddIcon className="icon"></AddIcon></h1>

                <p>HTML: we're meticulous about our implementation of Material Design, ensuring that every Material UI component meets the highest standards of form and function, but diverge from the official spec where necessary to provide multiple great options.</p>
            </div>
            <div class="tab1">
                <h1>Accordion Heading 2<AddIcon className="icon"></AddIcon></h1>
                <p>CSS: we're meticulous about our implementation of Material Design, ensuring that every Material UI component meets the highest standards of form and function, but diverge from the official spec where necessary to provide multiple great options.</p>

            </div>
            <div class="tab2">
                <h1>Accordion Heading 3<AddIcon className="icon"></AddIcon></h1>
                <p>javascript: we're meticulous about our implementation of Material Design, ensuring that every Material UI component meets the highest standards of form and function, but diverge from the official spec where necessary to provide multiple great options.</p>

            </div>
            <div class="tab3">
                <h1>Accordion Heading 4<AddIcon className="icon"></AddIcon></h1>
                <p>REACT: we're meticulous about our implementation of Material Design, ensuring that every Material UI component meets the highest standards of form and function, but diverge from the official spec where necessary to provide multiple great options.</p>

            </div>

        </div>
        </div>
    )
}

export default Heading
