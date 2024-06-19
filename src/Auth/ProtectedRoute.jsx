import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom'
import { contextApp } from '../context/createContext';

const ProtectedRoute = ({children}) => {
    const globalData = useContext(contextApp);
    const {validUser} = globalData
    const location = useLocation()
    
    if(!validUser) 
        return <Navigate to="/" state={{ from: location}} replace />
    return children
}

export default ProtectedRoute