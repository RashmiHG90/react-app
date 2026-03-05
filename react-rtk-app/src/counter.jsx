import { useState } from 'react';
import { useSelector } from 'react-redux';

function Counter(){

    let [n,setn]=useState(200);
    let counter =useSelector(gs=>gs.simpleReducer.count)

    return(
        <div>
            <h3>
                Counter component
                <p>Local state variable in counter component: {n}</p>
                <p>Global state variable got from slice: {counter}</p>
            </h3>
        </div>
    )
}

export default Counter;