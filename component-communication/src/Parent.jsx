import Child1 from "./Child1";
import Child2 from "./Child2";
import { useState } from "react";

function Parent(){
    let[parentname,setparentname]=useState("Raj")
    let[child1Name, setChild1Name]=useState("");
    let[child2Name, setChild2Name]=useState("");

    let receiveChildName=(childName)=>{
        console.log("Child name received in parent component is: "+childName);
        setChild1Name(childName);
    }

    let receiveChild2Name=(child2Name)=>{
        console.log("Child2 name received in parent component is: "+child2Name);
        setChild2Name(child2Name);
    }
   

    return(
    <div style={{backgroundColor:"lightgrey", padding:"20px"}}>
    <h3>Parent Component</h3>
    <p>Parent name in Parent component is: {parentname}</p>
    <p>Child1 name in Parent component is: {child1Name}</p>
    <p>Child2 name in Parent component is: {child2Name}</p>
    
        <Child1 parentName={parentname} passChildNameToParent={receiveChildName} child2Name={child2Name}/>
        <Child2 parentName={parentname} sendChild2NametoParent={receiveChild2Name} child1Name={child1Name}/>
        
    </div>
    )
}

export default Parent;