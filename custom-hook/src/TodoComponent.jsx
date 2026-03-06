import useAxiosConsumeApi from "./useAxiosConsumeApi"

let URL = "https://jsonplaceholder.typicode.com/todos";

function TodoComponent() {

    let{data,loading,error}=useAxiosConsumeApi(URL);

   if(loading){
    return <h3>Data Loading...</h3>
   }else{
    return(
        <div>
            <h3>Number of Todos are {data.length}</h3>
        </div>
    )
   }
}

export default TodoComponent