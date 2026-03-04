let initialState = {
 n:100, //number type
 fname:"Sunshine",
 
 employee:{id:101, name:"John", age:21}, //object type

 products:[{id:1, name:"Laptop", price:45000},
           {id:2, name:"Mobile", price:25000},
           {id:3, name:"Tablet", price:15000}] //array type    
 
}

function reducer(state=initialState,action){

    //based on action we do change on state variable
    //using if or swtich or other way
    //in RTK configureStore
    console.log("In reducer function")
    console.log("Reducer is triggered with action : ",action);
    if(action.type=="INCREMENT_N"){
        console.log("Incrementing n value in reducer function")
    //1st param state object with all property, 2nd property name which you want to change
    //3rd property value
        return{...state, n:state.n+1}
        //return{...state, n:state.n+1, fname:"SoulSearcher"}//if you want to change multiple property value in state object
    }

     if(action.type=="DECREMENT_N"){
        console.log("Decrementing n value in reducer function")
        return{...state, n:state.n-1}
    }

    if(action.type=="UPDATE_FNAME"){
        console.log("Updating fname value in reducer function")
        return{...state, fname:"Soul searcher"}
    }

    if(action.type=="DYNAMIC_INCREMENT_N"){
        console.log("Updating n value in reducer function - dynamic increment" + action.payload)
        //return{...state, n:action.payload}
        return{...state, n:state.n+parseInt(action.payload)}
    }

    if(action.type=="UPDATE_EMPLOYEE"){
        console.log("Updating employee details in reducer function")
        return{...state, employee:{...state.employee,age:24,name:"Smith"}}
        //1st param - state i.e all property - n,fname,employee,products
        //2nd param - want to change employee i.e object property which contain - id,name,age
        //3rd param - is another object which is  state.employee, employee property
        //and  new value can  be static or dynamic
         }

    return state;

}

export default reducer;