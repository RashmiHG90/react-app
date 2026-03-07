import { useNavigate } from "react-router-dom"

function Dashboard(){

    let navigate = useNavigate()

    return(
        <div>
        <h4>Welcome to Home Page</h4>
        <br />
        <input type="button"
        value="Logout"
        onClick={()=> navigate("/login")}
         />
        </div>
    )
}

export default Dashboard