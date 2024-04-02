import React from 'react'
import './App.css'
import Dashboard from './components/Dashboard'
import SideBar from './components/SideBar/SideBar'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Profile from './components/Profile/Profile'
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp'
import Transaction from './components/Transaction/Transaction'
import ProtectedRoute from './ProtectedRoutes'

const MyApp = () => {
  return (
    
    <BrowserRouter>
    <Routes>  
    </Routes>
    <div className='container'>
    <SideBar/>
    <Routes>
    <Route path="/" exact element={<Login/>} />
      <Route path="/signup" exact element={<SignUp/>} />   
      <Route path="/dashboard" element={<ProtectedRoute><Dashboard/></ProtectedRoute>} />
      <Route path="/transaction" element={<Transaction/>} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="/settings" element={<Dashboard/>} /> 
    </Routes>
    </div>
  </BrowserRouter>
  )
}

export default MyApp