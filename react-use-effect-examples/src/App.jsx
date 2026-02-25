import { use, useState } from 'react'
import SimpleUseEffect from './SimpleUseEffect'


function App() {
 
  let [flag,setFlag]=useState(false);
  let [msg, setMsg] = useState("Show Component");

  return (
    <>
      <div>
        <h2>Toggle component visibility</h2>
        <input type="button" value={msg} onClick={()=>
          {setFlag(!flag)
            setMsg(flag ? "Show Component" : "Hide Component")
          }          
        } />
       {flag && <SimpleUseEffect/>}
      </div>
    </>
  )
}

export default App
