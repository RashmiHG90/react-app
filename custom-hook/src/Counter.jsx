import useCount from "./useCount";

function Counter(){

    let{count,increment,decrement,reset}=useCount(0);

    return(
        <div>
            <h3>Simple Custom counter hook</h3>
            <p>Count value is {count}</p>
            <input type="button" value="Increment" onClick={increment}/>
            <input type="button" value="Decrement" onClick={decrement}/>
            <input type="button" value="Reset" onClick={reset}/>
        </div>
    )

}

export default Counter;