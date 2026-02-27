import {useContext} from "react";
import MyContext from "./MyContext";

function Child7(){

    //ready to consume data from context
    //the child component can be of any level
    let data = useContext(MyContext);

    return(
        <>
        <h3>Child7 Component</h3>
        <p>Parent value in child7 component:{data.name}</p>
        </>
    )
}

export default Child7;