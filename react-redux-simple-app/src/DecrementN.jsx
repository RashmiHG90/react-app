import { useDispatch } from 'react-redux';

function DecrementN(){

    let dispatch = useDispatch();

    let decrementNvalue=()=>{
        console.log("Decrement triggered");
        dispatch({type:"DECREMENT_N"})//it calls reducer function and display action type

    }

    return(
        <div>
          <p>Decrement n value</p>
          <input type="button" value="Decrement N" onClick={decrementNvalue} />
        </div>
    )
}

export default DecrementN;