import { useState } from 'react'
import AddTask from './AddTask'
import DisplayTask from './DisplayTask' 

function TaskOperation(){// parent component for add task and display task

    let[tasks,setTasks] = useState([]); // string array variable

    let addTask = (taskValue)=>{
        console.log("Task to be added in Task Operation:" +taskValue);
        setTasks([...tasks,taskValue]) //updating tasks array variable
    }

    return(
        <>
        <h3>Task Operation</h3>
        <AddTask passTaskToTaskOperation={addTask}/>
        <DisplayTask taskData={tasks}/>
        </>
    )
}

export default TaskOperation;