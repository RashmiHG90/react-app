import './App.css'
import { Routes, Route , Link} from 'react-router-dom'
import {Welcome} from './Welcome'
import {AboutUs} from './AboutUs'
import {ContactUs} from './ContactUs'
import Login from './Login'
import Dashboard from './Dashboard'
import { NotFound } from './NotFound'

function App() {
 

  return (
    <>
     <h2>React router example</h2>

     <Link to="/">Home</Link> |
     <Link to="/aboutUs">About Us</Link> |
     <Link to="/contactUs">Contact Us</Link> |
     <Link to="/login">Login</Link>

     <hr />

     <Routes>
      <Route path='/' element={<Welcome />} />
      <Route path='/aboutUs' element={<AboutUs />} />
      <Route path='/contactUs' element={<ContactUs />} />
      <Route path='/login' element={<Login />} />
      
        <Route path='/dashboard' element={
          <ProtectedRouter>
          <Dashboard />
          </ProtectedRouter>
        } />     
      <Route path='*'element={<NotFound/>} /> 
     </Routes>
    </>
  )
}

export default App
