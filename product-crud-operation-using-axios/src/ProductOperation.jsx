import { useEffect, useState } from "react";
import axios from "axios";


function ProductOperation(){

    let [product,setProduct]=useState({pname:"",price:"",category:""});
    let [products, setProducts] = useState([]);
    let [msg, setMsg] = useState("");
    let [error,setError] = useState("");
    let [render,setRender] = useState(false);
    let [updateFlag,setupdateFlag]=useState(false);
    let URL = "http://localhost:3000/products";

    let loadAllProducts = async()=>{
        try{
        let response= await axios.get(URL);
        console.log(response);
        setProducts(response.data);
        setMsg(response.statusText)
        }catch(error){
            console.log(error);
            setError(error.message);
        }
    }


    useEffect(()=>{
        loadAllProducts();
    },[render]);

    let handleInputData=(event)=>{
        console.log(event.target.name);
        let {name, value} = event.target;
        setProduct({...product,[name]:value});// common function to set pname and price from property
    }
    

    let handleSubmit= async (event)=>{
        event.preventDefault();
        console.log(product);
        setRender(false);
        if(updateFlag!==true){
        //logic to send data to server
        try{
            //firts parameter is URL and second parameter is data to be sent to server
        let result = await axios.post(URL, product)
        console.log(result);
        if(result.status === 201){
            setRender(true);
        }
        }catch(error){
            console.log(error)
        }
       }else if (updateFlag === true){
        //logic to update the product
         try{
            //firts parameter is URL and second parameter is data to be sent to server
        let result = await axios.put(URL+"/"+product.id, product)
        console.log(result);
        if(result.status === 200){
            setRender(true);
            setupdateFlag(false);
        }
        }catch(error){
            console.log(error)
        }
       }


        setProduct({pname:"",price:"",category:""});

    }

    let deleteProduct = async(id)=>{
        setRender(false);
        console.log(id);
        let result = await axios.delete(URL+"/"+id)
        console.log(result);
        setRender(true);
    }

    let setValueInFormToUpdateProduct = async(product)=>{
        setupdateFlag(true);
        console.log(product);
        setProduct(product);
    }

    return(
        <>
        <h4>Add Product</h4>
        <form onSubmit={handleSubmit}>
            <label >Product Name : </label>
            <input type="text" name ="pname" onChange={handleInputData} value={product.pname} />
            <br/><br/>
            <label>Product price : </label>
            <input type="text" name ="price" onChange={handleInputData} value={product.price} />
            <br/><br/>
            <label>Product category : </label>
            <input type="text" name ="category" onChange={handleInputData} value={product.category}  />
            <br/><br/>
            {updateFlag!==true &&<input type="submit" value="Add Product"/>}
            {updateFlag && <input type="submit" value="Update Product"/>}
        </form>



        {msg && <h4 style={{color:"Green"}}>Products load status :{msg}</h4>}
        {error && <h4 style={{color:"Red"}}>Error :{error}</h4> }
        <h3>List of products</h3>
        <table border ="1" cellPadding="10" cellSpacing="0">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Price</th>  
                    <th>Category</th>
                    <th>Delete</th>
                    <th>Update</th>
                </tr>
            </thead>
            <tbody>
                {
                    products.map(product=><tr key={product.id}>
                         <td>{product.id}</td>
                         <td>{product.pname}</td>
                         <td>{product.price}</td>
                         <td>{product.category}</td> 
                         <td>
                             <input type="button" value="Delete" onClick={()=>deleteProduct(product.id)} />
                         </td>  
                         <td>
                             <input type="button" value="Update" onClick={()=>setValueInFormToUpdateProduct(product)} />
                         </td>       
                         </tr>
                    )
                }

            </tbody>
        </table>

        </>
    );

}

export default ProductOperation;