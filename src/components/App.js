import React, { useReducer, useRef, useState } from 'react'

const App = () => {
    const [skills,setSkills]=useState([]);
    const inputRef=useRef(null);

    function addSkills(){
        const skill=inputRef.current.value;

        const updatedSkill=[...skills,skill];
        setSkills(updatedSkill);
        inputRef.current.value="";
    }

    const deleteSkill=(ind)=>{
        const updatedSkill=skills.filter((_,index)=>index!==ind);

        setSkills(updatedSkill);
    }
  return (
    <div>
        <h1 id='heading'>Use Callback Function</h1>
        <input type="text" id="skill-input" ref={inputRef}/>
        <button id="skill-add-btn" onClick={addSkills}>Add</button>

        <ul style={{listStyle:"none"}}>
            {
                skills?.map((skill,index)=>(
                    <li key={index}>
                        <span>{skill}</span>
                        <button onClick={()=>deleteSkill(index)}>
                            delete
                        </button>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default App