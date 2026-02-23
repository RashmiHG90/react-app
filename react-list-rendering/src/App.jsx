import { useState } from 'react'
import Students from './students'
import Products from './Products'
import InlineCSSComponent from './InlineCSSComponent'
import MyComponent from './MyComponent'
import StyledComponentExample from './StyledComponentExample'


function App() {
  
  return (
    <>
      <div>
        <h2> List rendering using key attribute</h2>
        {/* <Students/>
        <hr />
        <Products/> */}
        {/* <InlineCSSComponent/>
        <MyComponent/> */}
        <StyledComponentExample/>
      </div>
    </>
  )
}

export default App
