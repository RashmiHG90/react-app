import { useEffect, useState } from "react";
import axios from "axios";


function ProductOperation(){

    let [products, setProducts] = useState([]);
    let [msg, setMsg] = useState("");
    let [error,setError] = useState("");
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
    },[]);

    return(
        <>
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
                </tr>
            </thead>
            <tbody>
                {
                    products.map(product=><tr key={product.id}>
                         <td>{product.id}</td>
                         <td>{product.pname}</td>
                         <td>{product.price}</td>
                         <td>{product.category}</td>        
                    </tr>)
                }

            </tbody>
        </table>

        </>
    );

}

export default ProductOperation;