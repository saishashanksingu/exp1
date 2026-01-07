import { useState } from "react";
import "./App.css";

function App(){
  const[taske,setTask]=useState("");
  const[tasks,setTasks]=useState([]);

  const addTask=()=>{
    setTasks([...tasks,task]);
    setTask("");
  }

  return(
    <div>
      <h2>To Do List</h2>
      <input type='text' value={task} onChange={(e)=>setTask(e.target.value)} />
      <button onClick={addTask}>Add Tasks</button>

      <ul>
        {tasks.map((item,index)=>(
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App
