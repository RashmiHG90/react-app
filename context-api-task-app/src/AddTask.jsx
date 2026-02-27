import TaskContext from "./TaskContext";
import {useState, useContext} from "react";
import DisplayTask from "./DisplayTask";

function AddTask(){
    let[Task, setTask] = useState("");
    let contextRef = useContext(TaskContext);

    let addtask = (event)=>{
        event.preventDefault();
        console.log(Task);
        //ready to add task to list using context
       //PreviousTask is local variable which hold previoustask data and 2nd Parameter is new added task 
        contextRef.setTasks(previousTask=>[...previousTask, Task]);
        console.log(contextRef.Tasks);

        setTask("");
        
    }
    
    return(
        <>
        <h2>Add Task </h2>
        <form onSubmit={addtask}>
        <input type="text" name="task" placeholder="Enter the Task"
        onChange={(e)=>setTask(e.target.value)} value={Task}/>
        <input type="submit" name="addTask" />
        </form>
        <hr />
        <DisplayTask></DisplayTask>
        </>
    )
}

export default AddTask;