import { createSlice } from "@reduxjs/toolkit";


let simpleSlice = createSlice({
    name: "counter",
    initialState:{
        count:100,
        name:"Rashmi"
    },
    reducers:{
        //it can contain more than one action
        increment(state){
            state.count++;
        },
        decrement(state){
            state.count--;
        } 
    }

})

export let {increment,decrement}=simpleSlice.actions;
export default simpleSlice.reducer;