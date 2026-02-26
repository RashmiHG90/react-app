import { useState } from "react";

function Child1(props){

    let[child1Name, setchild1Name]=useState("Sonu");

    return(
    <div style={{backgroundColor:"lightblue", padding:"20px"}}>
    <h3>Child1 Component</h3>
    <p>Child1 name in Child1 component is: {child1Name}</p>
     <p>Parent name in Child1 component is: {props.parentName}</p>
     <p>Child2 name in Child1 component is: {props.child2Name}</p>
     {props.passChildNameToParent(child1Name)}
    
    </div>
    )
}

export default Child1;