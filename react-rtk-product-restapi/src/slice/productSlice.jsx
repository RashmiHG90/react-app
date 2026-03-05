import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

let URL="http://localhost:3000/products";

export let loadProductDetails = createAsyncThunk("product/loadProductDetails", async()=>{
let response = await axios.get(URL);
return response.data;
})

export let addProductToJsonFile = createAsyncThunk("product/addProductToJsonFile", async (productData) => {
let response = await axios.post(URL,productData);
return response.data;
})



let productSlice = createSlice({
      name:"product",
      initialState:{
        products:[], //global state variable
        loading:false,
        message:""
    },
        reducers:{},
      //handle asynchronous life cycle for promise
      //resolved:fulfil
      //rejected:rejected
      //process:pending
      extraReducers:(builder)=>{
        builder
        .addCase(loadProductDetails.fulfilled,(state,action)=>{
            console.log("Fulfilled")
            state.loading=false;
            console.log(action);
            state.products=action.payload;
        }).addCase(loadProductDetails.rejected,(state,action)=>{
            console.log("Rejected")
            state.loading=false;
            console.log(action);
        }).addCase(loadProductDetails.pending,(state,action)=>{
            console.log("Pending")
            state.loading=true;
        }).addCase(addProductToJsonFile.fulfilled,(state,action)=>{
            console.log("Fulfilled")
            state.loading=false;
            state.message=action.payload.message;
            console.log(action);
            // If API returns an array, replace; if it returns a single product object, append it.
            if (Array.isArray(action.payload)) {
                state.products = action.payload;
            } else if (action.payload) {
                state.products.push(action.payload);
            }
        }).addCase(addProductToJsonFile.rejected,(state,action)=>{
            console.log("Rejected")
            state.loading=false;
            console.log(action);
        }).addCase(addProductToJsonFile.pending,(state,action)=>{
            console.log("Pending")
            state.loading=true;
        })
       }
    
})

export default productSlice.reducer;