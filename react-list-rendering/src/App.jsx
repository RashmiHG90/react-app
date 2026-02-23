import { useState } from 'react'
import Students from './students'
import Products from './Products'
import InlineCSSComponent from './InlineCSSComponent'
import MyComponent from './MyComponent'


function App() {
  
  return (
    <>
      <div>
        <h2> List rendering using key attribute</h2>
        {/* <Students/>
        <hr />
        <Products/> */}
        <InlineCSSComponent/>
        <MyComponent/>

      </div>
    </>
  )
}

export default App
