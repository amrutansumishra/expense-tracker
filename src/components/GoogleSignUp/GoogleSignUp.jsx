import React, { useEffect } from 'react'
import { GoogleLogin,GoogleOAuthProvider } from '@react-oauth/google';
import {jwtDecode} from 'jwt-decode';

const GoogleSignUp = () => {

    const handleSignUp =(res)=>{
      console.log(jwtDecode(res.credential))
    }
    

  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLINT_ID}>
      <GoogleLogin
          width="300px"
          text="signup_with"
          onSuccess={credentialResponse => {
            handleSignUp(credentialResponse);
          }}
          onError={() => {
            console.log('Login Failed');
          }}
      />
    </GoogleOAuthProvider>
  )
}

export default GoogleSignUp