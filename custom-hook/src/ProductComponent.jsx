import useAxiosConsumeApi from "./useAxiosConsumeApi"

let URL = "https://dummyjson.com/products";

function ProductComponent() {

    let{data,loading,error}=useAxiosConsumeApi(URL);

   if(loading){
    return <h3>Data Loading...</h3>
   }else{
    return(
        <div>
            <h3>Number of Products are {data.length}</h3>
            <ol>
                {
                    data.products.map((product,index)=><li key={index}>
                        {product.title} - ${product.price.toFixed(2)}
                    </li>)
                }
            </ol>
        </div>
    )
   }
}

export default ProductComponent