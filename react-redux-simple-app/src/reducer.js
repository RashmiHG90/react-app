let initialState = {
 n:100, //number type
 fname:"Sunshine"
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
    }

     if(action.type=="DECREMENT_N"){
        console.log("Decrementing n value in reducer function")
        return{...state, n:state.n-1}
    }

    return state;

}

export default reducer;