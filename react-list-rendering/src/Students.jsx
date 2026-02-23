import {useState} from "react";

function Students(){

    let [snames, setSnames] = useState(["John","Alice","Bob","Charlie"]);

    let listOfStudents =snames.map((sname,index)=> <li key={index}>{index}-{sname}</li>)
    return(
        <div>
            {snames}
            <ol>
                {listOfStudents}
            </ol>
            <hr />
             <ul>
                {snames.map((sname,index)=> <li key={index}>{sname}</li>)}
             </ul>
        </div>
    )
}

export default Students