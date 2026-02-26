import { useState } from "react";   

function ProductOperations() {

    let [Product, setProduct] = useState({"pid": 0, "pname":"","price":0, "quantity":0});
    let [Products,setProducts]=useState([]); //array of product objects

    let handleChange = (event) =>{
        //console.log(event)
        let{name,value}=event.target;
        console.log(name +""+ value);
        setProduct({...Product,[name]:value});        
        //1st parameter is existing object and 2nd parameter is the updated key value pair.
    }

    let handleSubmit =(event) =>{
        event.preventDefault();
        console.log(Product);
        let found = Products.find((prod)=>prod.pid==Product.pid);
        if(found){
            alert("Product with id "+ Product.pid + " already exists");
        }else{
            setProducts([...Products,Product])
        }        
        setProduct({"pid": 0, "pname":"","price":0, "quantity":0})
    }


    return(
        <>
        <h2>Product Operation</h2>
        <form onSubmit={handleSubmit}>
        <label>Product Id:</label>
        <input type="number" name ="pid" onChange = {handleChange} value ={Product.pid}/><br/>
         <label>Product name:</label>
        <input type="text" name ="pname" onChange = {handleChange} value ={Product.pname}/><br/>
        <label>Product Price:</label>
        <input type="number" name ="price" onChange = {handleChange} value ={Product.price}/><br/>
        <label>Product Quantity:</label>
        <input type="number" name ="quantity" onChange = {handleChange} value ={Product.quantity}/>  <br/>
        <input type="submit" value = "Add Product" />  
        </form>   

        <h3>Product List</h3> 
        <table border={1}>
            <thead>
                <tr>
                    <th>Product Id</th>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                </tr>
            </thead>
            <tbody>
               {Products.map((product,index)=>
            <tr key={index}>
                <td>{product.pid}</td>
                <td>{product.pname}</td>
                <td>{product.price}</td>
                <td>{product.quantity}</td>
                </tr>)}    
            </tbody>
        </table>
        </>
    )
}

export default ProductOperations;