import { useState } from "react";   

function Child2(props){

    let[child2Name, setchild2Name]=useState("Monu");

    return(
    <div style={{backgroundColor:"lightgreen", padding:"20px"}}>
    <h3>Child2 Component</h3>
    <p>Child2 name in Child2 component is: {child2Name}</p>
    <p>Parent name in Child2 component is: {props.parentName}</p>
     <p>Child1 name in Child2 component is: {props.child1Name}</p>
    {props.sendChild2NametoParent(child2Name)}
    </div>
    )
}

export default Child2;