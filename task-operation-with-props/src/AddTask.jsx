import { useState } from 'react'

function AddTask(props){

    let [task,setTask] =useState(""); //local to add task i.e state variable

    let addTask=()=>{
        console.log("Task to be added:" +task);
        props.passTaskToTaskOperation(task);  //passing task value to parent component  
        setTask(""); //clear input feild after adding task
    }

    return(
        <>
        <h3>Add Task</h3>
        <input type="text" placeholder="Add Task" name="task"
        onChange={(e)=>setTask(e.target.value)} value={task} />
        <input type="button" value = "Add Task" onClick={addTask} />
        </>
    )
}

export default AddTask;