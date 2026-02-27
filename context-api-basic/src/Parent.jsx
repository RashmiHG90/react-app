import Child1 from "./Child1";
import Child2 from "./Child2";
import Child3 from "./Child3";  
import {useState} from "react";
import MyContext from "./MyContext";

function Parent(){

    let [name,setName] = useState("Sunshine");
    let [age,setage] =useState(21);

    return(
        <>
        <MyContext.Provider value={{name,age}}>
        <h3>Parent Component</h3>
        <p>Name in Parent Component: {name}</p>
        <Child1 />
        <Child2 />
        <Child3 fname={name} />
        </MyContext.Provider>
        </>
    )
}

export default Parent;