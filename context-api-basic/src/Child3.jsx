import Child6 from "./Child6";

function Child3(props){
    return(
        <>
        <h3>Child3 Component</h3>
        <p>Value from Parent through props: {props.fname}</p>
        <Child6 fname={props.fname}></Child6>
        </>
    )
}

export default Child3;