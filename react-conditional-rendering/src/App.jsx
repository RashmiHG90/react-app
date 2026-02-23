import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BasicRendering from './BasicRendering'
import DynamicRendering from './DynamicRendering'
import BooksMap from './BooksMap'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h2>React conditional rendering</h2>
      <BasicRendering/>
      <hr />
      <DynamicRendering/>
      <hr />
      <BooksMap/>
        
    </>
  )
}

export default App
