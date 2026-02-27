import { useContext } from "react";
import TaskContext from "./TaskContext";


function DisplayTask(){

    let contextRef = useContext(TaskContext);

    return(
        <>
        <ol>
            {contextRef.Tasks.map((task,index)=><li key={index}>{task}</li>)}
        </ol>
        </>
    )
}

export default DisplayTask;