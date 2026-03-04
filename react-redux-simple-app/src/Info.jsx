import { useState } from 'react';
import { useSelector } from 'react-redux';

function Info(){
    let [m,setm]=useState(200);//local state variable accessible inside this component
    let [name,setName]=useState("LocalVariable");//local state variable accessible inside this component
    
    let fnameValue = useSelector(gs=>gs.fname)//local state variable accessible inside this component
    return(
        <div>
            <h2>Info Component</h2>
            <p>Info component's local state variable name : {name}</p>
            <p>Global state variable from redux fname : {fnameValue}</p>
        </div>
    )
}

export default Info;