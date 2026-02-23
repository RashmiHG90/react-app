import { use, useState } from "react";

function ArrayStateProperty(){
    //state variable is array here
    let [names,setNames] = useState(["Alice ","Bob ","Charlie "]);
    let[fname,setfName]=useState("");
    let [count,setCount]=useState(0);

    let handleChange=(event)=>{
        // console.log("Event get triggered");
        // console.log(event.target.name + " " + event.target.value);
        setfName(event.target.value);
    }

    let addNames =()=>{
        console.log("Adding names:" + fname);
        //setNames(fname); will replace the whole array with new value, and array is not equal to string.
        //names.push(fname);
        //setNames(names); even this wont work because names is not normal variable it
        //  is state variable so we cannot do changes directly

        // let tempname = [...names] // copying names array to tempArray: shallow copy(copy only values not reference). 
        // // copy reference or both names and tempname both are pointing to same array in memory, 
        // // we cannot update state variable directly and if forcefully use it re-render will not happen
        // tempname.push(fname); // adding new name to temp array
        // setNames(tempname); // updating state variable with new array

        //short form of above 3 lines:  
        //spread operator '...' - ...names will extract all array elements of names array
        //fname will add be added to extracted array elements and new array is formed.
         
        setNames([...names,fname]);
        setCount(count+1);
        setfName("");
    }

    return(
        <div>
            <h2>Student Names:</h2>
             {/* here we can avoid using name atribute, it is not necssary */}
            <input type="text" placeholder="enter the name" name = "fname" onChange={handleChange}
            value = {fname}/>
            <input type="button" value = "Add names" onClick={addNames} />
            <p>Count of names added: {count}</p>
            <p>Names of all students: {names}</p>
            <hr />
            <p>First name:{names[0]}</p>
            <p>Second name:{names[1]}</p>
            <p>Third name:{names[2]}</p>
            <hr />
            <h3>All names in list</h3>
            <ol>
                {names.map(name=> <li>{name}</li>)}
            </ol>
            <hr />
            <h4>All names in list</h4>
            <ul>
                {names.map(name=> <li>{name}</li>)}
            </ul>
            <hr />
            {names.map(n=><p>{n}</p>)}

        </div>
    )
}

export default ArrayStateProperty;