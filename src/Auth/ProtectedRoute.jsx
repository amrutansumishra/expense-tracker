import React from 'react';
import { Navigate, useLocation } from 'react-router-dom'
// import { useStore } from '../context/StoreProvider';

const ProtectedRoute = ({children}) => {
    const validUser = sessionStorage.getItem("authToken")

    const location = useLocation()
    
    if(!validUser) 
        return <Navigate to="/" state={{ from: location}} replace />
    return children
}

export default ProtectedRoute