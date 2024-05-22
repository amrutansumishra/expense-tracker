import React, { useEffect } from 'react'

const GoogleSignUp = () => {
    const handleCallbackResponse =()=>{

    }
    
    useEffect(()=>{
   
        const google = window.google
          google.accounts.id.initialize({
            client_id:"497536317508-5eehhd10pmuem7ipk275lpqdccat8jlc.apps.googleusercontent.com",
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

export default GoogleSignUp