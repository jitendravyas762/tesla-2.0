import React from 'react'
import { useState } from 'react'
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CheckBoxIcon from "@mui/icons-material/CheckBox";


function Home() {
    const [ input,setinput]=useState('')
    const [listitem,setlistitem]=useState([])
    const [editing, setEditing] = useState(false);
  const [markDone, setDone] = useState([]);
    function hendler(e){
        setinput(e.target.value)
        // console.log(input)
    }

    function hendleronsubmit(e){
        e.preventDefault();
        if(input.length>0 && editing===false){
            setlistitem([...listitem,input]);
            setinput('')
        }
        else{
            listitem[editing]=input;
            setlistitem(listitem);
            setinput('');
            setEditing(false);
        }
    }

    function handleDelete(e, item, index) {
        e.preventDefault();
        setlistitem(
          listitem.filter((element, ind) => {
            return ind !== index;
          })
        );
      }
    
      function handleEdit(e, item, index) {
        e.preventDefault();
        setinput(item);
        setEditing(index);
      }
      function handleDone(e, item, index) {
        e.preventDefault();
        setDone([...markDone, index]);
      }

    
  return (
    <div>
        <h1>To Do List</h1>
      <form onSubmit={hendleronsubmit}>
        <input type='text' placeholder='enter your name' value={input} onChange={hendler}></input>
        <button type="submit">Submit</button>

      </form>
      <ul>
        {listitem.map((element,index)=> {
            return(
                <li key={index} className={markDone.includes(index)?"completed":""}>
                {element}{''}
                <a href='' onClick={(e)=>handleDelete(e,element,index)}>  <DeleteIcon />
                </a>
                <a href="" onClick={(e) => handleEdit(e, element, index)}>
                <EditIcon />
              </a>
              <a href="" onClick={(e) => handleDone(e, element, index)}>
                <CheckBoxIcon />
              </a>
                </li>
            )

        })
        }
      </ul>
    </div>
  )
}

export default Home
