import React, { useState, useEffect } from 'react'; 
import './App.css'; 
import axios from 'axios';

function App() { 

const [data, setData] = useState(null); 

async function fetchDataES6Style() { 
  try{
     const response = await fetch('https://jsonplaceholder.typicode.com/todos/1'); 
     const jsonData = await response.json(); 
     setData(jsonData); 
  }
  catch(error){
    console.log(error);
  }

} 

function fetchDataES5Style(){
  fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response=>response.json()).then(jsonData=>setData(jsonData))
  .catch(error=>console.log(error));
}

function loadDataUsingAxiosES5Style(){
 axios.get('https://jsonplaceholder.typicode.com/todos/1')
 .then(response=>setData(response.data)).catch(error=>console.log(error));
}

async function loadDataUsingAxiosES6Style(){
  try{
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
    setData(response.data) 
  }catch(error){
    console.log(error);
  }

}

useEffect(() => { 
//fetchDataES6Style(); 
//fetchDataES5Style();
//loadDataUsingAxiosES5Style();
loadDataUsingAxiosES6Style();
}, []); 

return ( 
<div className="App"> 
<h1>API Demo</h1> 
   
 
      {data ? ( 
        <p>API response: {JSON.stringify(data)}</p> 
      ) : ( 
        <p>Loading...</p> 
      )} 
    </div> 
  ); 
} 
 
export default App;