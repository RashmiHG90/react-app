import { useNavigate } from "react-router-dom"

function Dashboard(){

    let navigate = useNavigate()

    let user = sessionStorage.getItem("user") //get email id from session storage

    return(
        <div>
        <h4>Welcome {user} to Home Page</h4>
        <br />
        <input type="button"
        value="Logout"
        onClick={()=> {
            sessionStorage.removeItem("user") //remove email id from session storage
            navigate("/login")}
        }
         />
        </div>
    )
}

export default Dashboard