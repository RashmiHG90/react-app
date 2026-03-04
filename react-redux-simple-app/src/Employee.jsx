import { use } from "react";        
import { useSelector ,useDispatch} from "react-redux";


function Employee(){

    let employeeData = useSelector(gs=>gs.employee)
    let dispatch = useDispatch();

    let updateEmployee=()=>{
        dispatch({type:"UPDATE_EMPLOYEE"})

    }

    return(
        <div>
            <h3>Employee Component</h3>
            <p>Employee id : {employeeData.id}</p>
            <p>Employee name : {employeeData.name}</p>
            <p>Employee age : {employeeData.age}</p>
            <input type="button" value = "Update Employee Details"
            onClick={updateEmployee} />
        </div>
    )
}

export default Employee;