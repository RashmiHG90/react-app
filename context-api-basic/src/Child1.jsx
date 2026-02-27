import Child4 from "./Child4";
import MyContext from "./MyContext";
import {useContext} from "react";

function Child1(){

    //ready to consume data from context
    //the child component can be of any level
    let data = useContext(MyContext);

    return(
        <>
        <h3>Child1 Component</h3>
        <p>Value in child component: {data.name} and Age is {data.age}</p>
        <Child4 />
        </>
    )
}

export default Child1;