import { useDispatch } from "react-redux";
import { dynamicDecrement } from "./slice.js";
import { useState } from "react";

function DynamicCounterDecrement(){

    let dispatch = useDispatch();
    let [count,setCount]=useState("");

    let counterDecrementer =()=>{
        dispatch(dynamicDecrement(count))
        setCount("");
    }

    return(
        <div>
            <h3>Decrement Counter</h3>
            <input type="text" 
            placeholder="Enter the number"
            value={count}
            onChange={(e)=>setCount(e.target.value)}/>
           <input type="button" value="Decrement Counter" onClick={counterDecrementer} />
        </div>
    )
}

export default DynamicCounterDecrement;