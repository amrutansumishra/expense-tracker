import React from 'react'
import './App.css'
import {Login,SignUp,Dashboard,Profile,Transaction,NotFound} from "./pages"
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import ProtectedRoute from './Auth/ProtectedRoute';
import { StoreProvider } from './context/StoreProvider';


const MyApp = () => {
  return (
    
  <BrowserRouter>
  <StoreProvider>
    <Routes>
      <Route path="/" exact element={<Login/>} />
      <Route path="/signup" exact element={<SignUp/>} /> 
      <Route path="/dashboard" element={<ProtectedRoute><Dashboard/></ProtectedRoute>} />
      <Route path="/transaction" element={<ProtectedRoute><Transaction/></ProtectedRoute>} />
      <Route path="/profile" element={<ProtectedRoute><Profile/></ProtectedRoute>} />
      <Route path="/*" element={<NotFound/>} />
    </Routes>
  </StoreProvider>
  </BrowserRouter>
  
  )
}

export default MyApp