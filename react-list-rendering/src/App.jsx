import { useState } from 'react'
import Students from './students'
import Products from './Products'


function App() {
  
  return (
    <>
      <div>
        <h2> List rendering using key attribute</h2>
        <Students/>
        <hr />
        <Products/>
      </div>
    </>
  )
}

export default App
