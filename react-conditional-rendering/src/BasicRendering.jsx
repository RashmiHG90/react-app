import { useState } from 'react'

function BasicRendering(){
  //let isLoggedIn = useState(false)[0] -- this returns array with 2 values, first is the state variable and second is the function to update the state variable. 
  // we are only interested in the first value so we can use array destructuring to get the first value and ignore the second value.
  let [isLoggedIn, setLoggedIn] = useState(false); 

    if(isLoggedIn){
         return <div>Welcome john</div>}
         else{ 
            return <div>Welcome Guest</div>}
}

export default BasicRendering