import React from 'react'
import './App.css'
import {Login,SignUp,Dashboard,Profile,Transaction} from "./pages"
import { BrowserRouter,Route,Routes } from 'react-router-dom'


const MyApp = () => {
  return (
    
  <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<Login/>} />
      <Route path="/signup" exact element={<SignUp/>} />   
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/transaction" element={<Transaction/>} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="/settings" element={<Dashboard/>} /> 
    </Routes>
  </BrowserRouter>
  )
}

export default MyApp