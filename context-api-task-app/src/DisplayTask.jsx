import { useContext } from "react";
import TaskContext from "./TaskContext";


function DisplayTask(){

    let contextRef = useContext(TaskContext);

    let handleDelete=(index)=>{
        console.log("Calling delete function on index:"+ index)
        //filter returns new array with filter condition
        //Other way of doing it..
        //let newtaskdata = contextRef.Tasks.filter((_,i)=>i!=index)
        //contextRef.setTasks(newtaskdata);
        contextRef.setTasks(contextRef.Tasks.filter((_,i)=>i!=index));
    }

    return(
        <>
        <ul>
            {contextRef.Tasks.map((task,index)=><li key={index}>{task}
            <input type="button" value="Delete" onClick={()=>handleDelete(index)} />
            </li>)}
            
        </ul>
        </>
    )
}

export default DisplayTask;