import { useState } from 'react';
import { useSelector } from 'react-redux';

function Hello(){
    let [m,setm]=useState(200);//local state variable accessible inside this component
    let nValue = useSelector(gs=>gs.n);
    return(
        <div>
            <h2>Hello Component</h2>
            <p>Hello component's local state variable m : {m}</p>
            <p>Global state variable from redux n : {nValue}</p>
        </div>
    )
}

export default Hello;