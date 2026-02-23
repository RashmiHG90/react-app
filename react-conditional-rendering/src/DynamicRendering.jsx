import { useState} from 'react'

function DynamicRendering(){
    let [flag,setFlag] = useState(false)
    let [msg, setMsg] = useState("show Paragraph")

    let FirstComponent = ()=><p>This is First Component</p>
    let SecondComponent = ()=><p>This is Second Component</p>

    return(
        <div>
          <h2>Dynamic Rendering</h2>
          <input type="button" value ={msg} onClick = {()=>{
            setFlag(!flag)
            if(!flag){
                setMsg("Hide Paragraph")
            }else{
                setMsg("Show Paragraph")
            }
          }}
            />
         
           {flag ? <FirstComponent/> : <SecondComponent/>}

            {flag && <p>This paragraph is shown only when flag is true</p>} 

        </div>
    )
}

export default DynamicRendering;