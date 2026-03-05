
import './App.css'
import AddProduct from './components/AddProduct'
import ViewProducts from './components/ViewProducts'



function App() {


  return (
    <>
     <h3>RTK based CRUD operation on products</h3>
     <AddProduct></AddProduct>
     <hr />
     <ViewProducts></ViewProducts>
     
    </>
  )
}

export default App
