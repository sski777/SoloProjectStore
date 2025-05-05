import { useState } from 'react'
import './index.css'
import HomePage from './HomePage'
import Navbar from './NavBar'
import Footer from './Footer'
import AboutPage from './AboutPage'
import ProtectedRoute from './AuthMiddleware'
import StorePage from './StorePage'
import NotFoundPage from './NotFound'
import ContactPage from './ContactUSPage'
import Profile from './Profile'
import PleaseLogin from './PleaseLogIn'
import CartPage from './CartPage'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
function App() {

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/shop' element={<StorePage/>}></Route>
        <Route path='/contact' element={<ContactPage/>}></Route>
        <Route path='/profile' element={<ProtectedRoute><Profile/></ProtectedRoute>}></Route>
        <Route path='/pleaselogin' element={<PleaseLogin/>}></Route>
        <Route path='/cart' element={<ProtectedRoute><CartPage/></ProtectedRoute>}></Route>
        <Route path='/about' element={<AboutPage/>}></Route>
        <Route path='*' element={<NotFoundPage/>}></Route>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
