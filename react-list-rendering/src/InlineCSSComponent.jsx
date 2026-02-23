//Other way of doing it
const headingStyle = {
    color:"Purple",
    fontSize:"20px",
    backgroundColor:"Pink"
}


function InlineCSSComponent() {

    return(
        <div>
            <p style={{"color":"red", "fontSize":"20px","backgroundColor":"yellow"}}>
                Applying styleing using an inline CSS component</p>
            <h3 style={headingStyle}>Applying styling with CSS component or JS object </h3>
            

        </div>
    )

}

export default InlineCSSComponent;