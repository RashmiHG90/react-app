import { isAuthenticated } from "./auth"
import { Navigate } from "react-router-dom"

function ProtectedRouter(props){
   console.log(isAuthenticated())
   if(!isAuthenticated()){
    console.log("")
    return <Navigate to ='/login'/>
   }
    return props.children
   }


export default ProtectedRouter