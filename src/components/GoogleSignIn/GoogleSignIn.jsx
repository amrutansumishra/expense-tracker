import React, { useEffect } from 'react'

const GoogleSignIn = () => {
    const handleCallbackResponse =()=>{

    }
    
    useEffect(()=>{
        const google = window.google
          google.accounts.id.initialize({
            
            client_id:process.env.REACT_APP_GOOGLE_CLINT_ID,
            callback: handleCallbackResponse
          })
      
          google.accounts.id.renderButton(
            document.getElementById("signIn"),
            {theme:"outline",size:"large",width: "300", logo_alignment: "center"}
          )
        
      },[])
  return (
    <div id="signIn"></div>
  )
}

export default GoogleSignIn