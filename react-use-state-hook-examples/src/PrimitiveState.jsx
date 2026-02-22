import { useState } from "react";

function PrimitiveState(){

    let n =0;// local variable if we do any changes it's value will not update in ui or doesn't re-render component
    console.log(useState()); 
    // it returns array 0 index default value and 1 index is function to update the value
    let [Id,setId] = useState(100); //state variable
    let [name,setName] = useState("Rahul");
    let [salary,setSalary] = useState(50000);
    let[isActive,setIsActive] = useState(true);
    
    let changeValue =() =>{
        n = n+1;
        console.log("Value of n after increment:" +n);
        setId(Id+1);
        setName("Rohit");
        setSalary(60000);
        setIsActive(false); 
    }

    return (
        <div>
            <h2>Primitive State Example</h2>
            <p> Employee details:id is: {Id}, name is: {name} and salary is {salary} and active status is {isActive?"Active":"Inactive"}</p>
            <input type = "button" value ="Increment" onClick={changeValue}/>
        </div>
    )
}

export default PrimitiveState;