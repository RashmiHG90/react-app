import FunctionstyleComponent from "./FunctionstyleComponent";
import ClassstyleComponent from "./ClassstyleComponent";  

function HeaderComponent(){
  return <h1>This is Header Component</h1>
}

function FooterComponent(){
  return <h1>This is Footer Component</h1>
}

function EmployeeComponent(){
  let employeeId= 1001; //local variable;
  let employeeName= "John Doe";
  let employeeAge= 30;

  return <div>
    <h1> Employee Component details: </h1>
    <h4>Employee ID: {employeeId}</h4>
    <h4>Employee Name: {employeeName}</h4>
    <h4>Employee Age: {employeeAge}</h4>  
  </div>
}

function MainComponent(){
  return (<div>This is Main Component
    <EmployeeComponent></EmployeeComponent>
  </div>)
}

function App(){
  // return (<div>
  //   Welcome to React JS created by Rashmi
  //   <HeaderComponent></HeaderComponent>
  //   <MainComponent></MainComponent>
  //   <FooterComponent></FooterComponent>
  // </div>)
  return(<div>
    <p>Component types:</p>
      <FunctionstyleComponent></FunctionstyleComponent>
      <ClassstyleComponent></ClassstyleComponent>
  </div>)
}

export default App;