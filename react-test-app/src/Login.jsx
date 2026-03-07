import {useState} from "react"

function Login(){

    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let [message, setMessage] = useState("");

    let handleSubmit = (e)=>{
        e.preventDefault();

        if(!email || !password ){
            setMessage("Please fill all the details");
            return
        }

        if(email==="admin@gmail.com" && password === "admin123"){
            setMessage("Login successful");
        }else{
            setMessage("Invalid email or password");
        }

    }


    return (
        <div>
            <h3>Login Page</h3>
            <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" value={email} name="email"
            onChange={(e)=>setEmail(e.target.value)}  /><br/>

            <label htmlFor="password">Password</label>
            <input type="password" id="password" value={password}  name="password"
            onChange={(e)=>setPassword(e.target.value)} /><br/>

            <button type="submit">Login</button>
            
            </form>

            {message && <p>{message}</p>}
        </div>
    )

}

export default Login