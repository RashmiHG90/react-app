import { useDispatch } from 'react-redux';
import { useState } from 'react';

function DynamicIncrementN(){

    let dispatch = useDispatch();
    let [num, setNum] = useState(0);

    let incrementNvalue=()=>{
        console.log("Increment triggered");
        dispatch({type:"DYNAMIC_INCREMENT_N", payload:num})//it calls reducer function and display action type
        setNum(0);
    }

    return(
        <div>
          <p>Dynamic Increment n value</p>
          <input type="text" name= "num" onChange={(event)=>setNum(event.target.value)}
          placeholder="Enter number to increment n value" value={num} />
          <input type="button" value="Increment N" onClick={incrementNvalue} />
        </div>
    )
}

export default DynamicIncrementN;