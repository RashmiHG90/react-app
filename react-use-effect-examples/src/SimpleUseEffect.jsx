import React, { useState, useEffect } from 'react';


function SimpleUseEffect() {

    let[count, setCount] = useState(0);
    let[count1, setCount1] = useState(0);


    //Simple use effect without dependencies array, 
    // it will be called first and every time when component re-renders
    // useEffect(()=>{
    //     console.log("Use effect called, component loaded")
    // })

     //useEffect with empty dependency array
    // it will be called only once when component first loads or mounts
    // useEffect(()=>{
    //     console.log("Use effect with empty dependency array")
    // },[]);

    //useEffect with dependency array with count variable
    useEffect(()=>{
        console.log("Use effect with denpency and count", count)
    },[count]);

    //useeffect with removing or unmounting component at certain condition.
    useEffect(()=>{
        console.log("Component mounted - loaded.. Simpleuseeffect")
        return()=>{
            console.log("Component unmounted - removed.. Simpleuseeffect")
        }
    },[count1])

    return(
        <React.Fragment>
            <h2>Use Effect example</h2>
            <p>Count in use effect:{count} and Count1: {count1}</p>
            <input type="button" value ="Increment"
            onClick = {()=> setCount(count+1)} />

            <input type="button" value ="Increment Count1"
            onClick = {()=> setCount1(count1+1)} />
        </React.Fragment>

    )
}

export default SimpleUseEffect;