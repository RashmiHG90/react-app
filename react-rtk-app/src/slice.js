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
        },
        dynamicIncrement(state,action){
            console.log(state);
            console.log(action);
            state.count = state.count + Number(action.payload);
        },
        dynamicDecrement(state,action){
            console.log(state);
            console.log(action);
            state.count = state.count - Number(action.payload);
        }
    }

})

export let {increment,decrement,dynamicIncrement,dynamicDecrement}=simpleSlice.actions;
export default simpleSlice.reducer;