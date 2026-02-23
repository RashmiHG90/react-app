let products = [
    {id:101, name:"Laptop", price:45000},
    {id:102, name:"Mobile", price:25000},
    {id:103, name:"Tablet", price:15000},
    {id:104, name:"Headphones", price:5000},
    {id:105, name:"Smartwatch", price:10000}
]


function Products(){

    let productrow = products.map((product)=>
        <tr key={product.id}>
            <td> {product.id}</td>
            <td> {product.name}</td>
            <td> {product.price}</td>
         </tr>
    )
    return(
        <div>
          <h3>List of Products</h3>
          <table border ="1">
            <thead>
            <tr>
                <th>Product ID</th>
                <th>Product Name</th>
                <th>Price</th>
            </tr>
            </thead>
            <tbody>{productrow}</tbody>
          </table>

        </div>
    )
}

export default Products;