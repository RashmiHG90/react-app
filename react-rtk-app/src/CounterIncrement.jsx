import { useDispatch } from "react-redux";
import { increment } from "./slice.js";

function CounterIncrement(){

    let dispatch = useDispatch();
    let counterIncrementer =()=>{
        dispatch(increment())
    }

    return(
        <div>
            <h3>Increment Counter</h3>
           <input type="button" value="Increment Counter" onClick={counterIncrementer} />
        </div>
    )
}

export default CounterIncrement;