import React, { useContext } from 'react'
import { GoogleLogin,GoogleOAuthProvider } from '@react-oauth/google';
import {jwtDecode} from 'jwt-decode';
import { googleAuth } from '../../services/services';
import { contextApp } from '../../context/createContext';
import { useNavigate } from 'react-router-dom';


const GoogleSignIn = () => {
  const navigation = useNavigate()
    const globalData = useContext(contextApp)
    const {setValiduser} = globalData
    const handleLogin =(res)=>{
      console.log(jwtDecode(res.credential))
      const result = googleAuth(res.credential)
      if(result){
        setValiduser(true);
        navigation('/dashboard')
      }
       
    }
  
  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLINT_ID}>
      <GoogleLogin
          width="300px"
          text="signin_with"
          onSuccess={credentialResponse => {
            handleLogin(credentialResponse);
          }}
          onError={() => {
            console.log('Login Failed');
          }}
      />
    </GoogleOAuthProvider>
  )
}

export default GoogleSignIn