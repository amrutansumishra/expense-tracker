import React from 'react'
import { GoogleLogin,GoogleOAuthProvider } from '@react-oauth/google';

const GoogleSignIn = ({socialLogin,text}) => {
  
  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLINT_ID}>
      <GoogleLogin
          width="300px"
          text={text}
          onSuccess={credentialResponse => {
            socialLogin(credentialResponse);
          }}
          onError={() => {
            console.log('Login Failed');
          }}
      />
    </GoogleOAuthProvider>
  )
}

export default GoogleSignIn