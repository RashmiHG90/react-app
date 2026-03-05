import { useDispatch } from "react-redux";
import { dynamicIncrement } from "./slice.js";
import { useState } from "react";

function DynamicCounterIncrement(){

    let dispatch = useDispatch();
    let [count,setCount]=useState("");

    let counterIncrementer =()=>{
        dispatch(dynamicIncrement(count))
        setCount("");
    }

    return(
        <div>
            <h3>Increment Counter</h3>
            <input type="text" 
            placeholder="Enter the number"
            value={count}
            onChange={(e)=>setCount(e.target.value)}/>
           <input type="button" value="Increment Counter" onClick={counterIncrementer} />
        </div>
    )
}

export default DynamicCounterIncrement;