import { useState } from 'react'
import Students from './students'
import Products from './Products'
import InlineCSSComponent from './InlineCSSComponent'


function App() {
  
  return (
    <>
      <div>
        <h2> List rendering using key attribute</h2>
        {/* <Students/>
        <hr />
        <Products/> */}
        <InlineCSSComponent/>
      </div>
    </>
  )
}

export default App
