import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { loadProductDetails } from "../slice/productSlice";

function ViewProducts(){

    let loadingValue = useSelector(gs=>gs.productReducer.loading);

    let productsArray = useSelector(gs=>gs.productReducer.products);

    let messageValue = useSelector(gs=>gs.productReducer.message);

    let dispatch=useDispatch();//to call action method of slice in RTK

    useEffect(()=>{
        //calling automatically action function part of slice 
        dispatch(loadProductDetails())
    },[messageValue])
            
         if(loadingValue){
            return  <h4>Data Loading...</h4>
            }else{ 
                return(
                <div>
                    <h3>View all Products</h3>
                    <table border = "1">
                        <thead>
                             <tr>
                               <th>Product Id</th>
                               <th>Product Name</th>
                               <th>Product Price</th>
                            </tr>
                        </thead>
                       <tbody>
                        {   
                            (Array.isArray(productsArray) ? productsArray : []).map(product=>
                                <tr key={product.id}>
                                    <td>{product.id}</td>
                                    <td>{product.name}</td>
                                    <td>{product.price}</td>
                                </tr>
                            )
                        }
                       </tbody>
                    </table>
                </div>
                )
            }
            

}

export default ViewProducts;