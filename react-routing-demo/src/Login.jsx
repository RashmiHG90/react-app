import { useState } from "react"
import { useNavigate } from "react-router-dom"
import loginDBDetails from "./loginDB"

function Login(){

    let [emailId, setEmailId] = useState('')
    let [password, setPassword] = useState('')
    let [message, setMessage] = useState('')  
    
    let navigate=useNavigate()
    
    let checkLoginDetails = (e) => {
        e.preventDefault();
        //console.log(emailId + " " + password)
    //   if(emailId === "admin@gmail.com" && password === "admin123"){
    //     alert ("Login successful")
    //     setMessage("Login successful")
    //     navigate('/dashboard')
    //   }else{
    //     // alert("Login failed try once again")
    //     setMessage("Invalid username or password")  
    //   }

     //check details from in memory db
     let result = loginDBDetails.find(ll=> ll.emailId === emailId && ll.password === password)
         if(result){
            //token value retrieved from backend technology, token id being unique.
            //sessionStorage.setItem("token", tokenValue)

            sessionStorage.setItem("user",emailId) //set email id in session storage
            navigate('/dashboard')
         }else{
            setMessage("Invalid username or password")
         }
        setEmailId('')
        setPassword('')
        
    }

    return (
        <div>
        <h4>Login Page</h4>
       <span style={{color: 'red'}}>{message}</span>
        <form onSubmit={checkLoginDetails}>
            <input type="email" 
            name="emailId"
            value={emailId}
            placeholder="Enter the email"
            onChange={(e)=>setEmailId(e.target.value)}/>
            <br />
            <input type="password"
            name="password"
            value={password}
            placeholder="Enter the password"
            onChange={(e)=>setPassword(e.target.value)}/>
            <br />
            <input type="submit" value = "SignIn" />
        </form>
        </div>
    )
}

export default Login