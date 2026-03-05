import { useDispatch } from "react-redux";
import { decrement } from "./slice.js";

function CounterDecrement(){

    let dispatch = useDispatch();
    let counterDecrementer =()=>{
        dispatch(decrement())
    }

    return(
        <div>
            <h3>Decrement Counter</h3>
           <input type="button" value="Decrement Counter" onClick={counterDecrementer} />
        </div>
    )
}

export default CounterDecrement;