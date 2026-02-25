import { useState } from 'react';

function LoginPage() {

    let[email,setemail] = useState("");
    let[password,setpassword] = useState("");
    let[msg,setmsg] = useState("");

    let handelsubmit =(event)=>{
        event.preventDefault();
        console.log("Form Submitted");
        // console.log("Email : "+email);
        // console.log("Password : "+password);
        if(email === "admin@gmail.com" && password === "admin123"){
            setmsg("Login Successfull");
        } else {
            setmsg("Login Failed");
        }
        setemail("");
        setpassword("");    
    }

    return(
        <div>
            <span style = {{color:"red"}}>{msg}</span>
          <h3>Login Page</h3>
          <form onSubmit={handelsubmit}>
            <label>EmailId : </label>
            <input type="email" name="email" onChange={(e)=>setemail(e.target.value)} value={email}/><br />
            <label>Password : </label>
            <input type="password" name="password" onChange={(e)=>setpassword(e.target.value)} value={password}/><br />
            <button type="submit">Login</button>
          </form>
        </div>
    )
}

export default LoginPage;