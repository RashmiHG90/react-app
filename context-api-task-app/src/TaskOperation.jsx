import AddTask from "./AddTask";
import TaskContext from "./TaskContext";
import {useState} from "react";


function TaskOperation(){

    let [Tasks,setTasks]=useState([]);

    return(
        <>
        <TaskContext.Provider value={{Tasks, setTasks}}>            
        <h2>Task Operation</h2>
        <AddTask></AddTask>
        </TaskContext.Provider>
        </>
    )
}

export default TaskOperation;