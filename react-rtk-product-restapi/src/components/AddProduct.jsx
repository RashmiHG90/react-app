import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProductToJsonFile } from "../slice/productSlice";

function AddProduct(){

    let [product,setProduct]=useState({"name":"","price":""})
    let dispatch=useDispatch();

    let addProduct=(e)=>{
        e.preventDefault();
        console.log(product);
        dispatch(addProductToJsonFile(product))
        setProduct({"name":"","price":""})
    }

    let handleChange=(e)=>{
        let {name,value} = e.target;
        setProduct({...product,[name]:value})
    }

    return(
        <div>
            <h3>Add Product</h3>
            <form onSubmit={addProduct}>

                <input type="text" name="name" placeholder="Product Name" onChange={handleChange} />
                <br />
                <input type="number" name="price" placeholder="Product Price" onChange={handleChange} />
                <br />
                <input type="submit" value="Add Product" />
            </form>
        </div>
    )
}

export default AddProduct;