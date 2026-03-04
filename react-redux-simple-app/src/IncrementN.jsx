import { useDispatch } from 'react-redux';

function IncrementN(){

    let dispatch = useDispatch();

    let incrementNvalue=()=>{
        console.log("Increment triggered");
        dispatch({type:"INCREMENT_N"})//it calls reducer function and display action type

    }

    return(
        <div>
          <p>Increment n value</p>
          <input type="button" value="Increment N" onClick={incrementNvalue} />
        </div>
    )
}

export default IncrementN;