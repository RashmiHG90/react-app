import {Component} from "react";

//inheritance
class ClassstyleComponent extends Component{

    constructor(props){
        super(props); //super keyword is used to call the constructor of parent class
        this.state={name:"Rahul"}
    }

    changeName=()=>{
        this.setState({name:"Rahul Sharma"})
    }

   //predefined method to return jsx
    render(){
        return(<div>
            <h1>This is Class Style Component</h1>
            <p> Name from this component: {this.state.name} and id is:{this.props.id}
                and designated as:{this.props.desg}
            </p>
            {/* <input type="button" value="Change Name Js" onclick="changeName()"/> */}
            <input type="button" value="Change name in react js" onClick={this.changeName}/>    
        </div>
        )
    }
}

export default ClassstyleComponent;