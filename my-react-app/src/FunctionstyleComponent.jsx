import  { useState } from "react";

function FunctionstyleComponent(props){
    let [name,setname]= useState("Rashmi")

    let changeName=()=>{
        setname("Rashmi Sharma")
    }
    return(<div>
        <h1>This is Function Style Component</h1>
        <p>Name from this component:{name} and id is:{props.id} and designated as:{props.desg}</p>
        <button onClick={changeName}>Change Name</button>
    </div>)
}

export default FunctionstyleComponent;