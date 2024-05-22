import React,{useEffect,useState,memo} from 'react'

const Otp = ({active,email}) => {
    const [isButtonDisabled, setButtonDisabled] = useState(true);
    const [counter, setCounter] = useState();

    const sendOtpEmail =(email)=>{
        console.log("email sent code",email)
        setCounter(10)
        setButtonDisabled(true)
      }

      const handleAction=()=>{
        sendOtpEmail(email)
      }
    console.log("btn")
    useEffect(()=>{
        sendOtpEmail(email)
    },[email])
    useEffect(() => {
        let timer;
    
        if (counter > 0 && isButtonDisabled) {
          timer = setInterval(() => {
            setCounter((prevCounter) => prevCounter - 1);
          }, 1000);
        }
        // Cleanup interval on component unmount
        return () => clearInterval(timer);
        
      }, [counter, active,isButtonDisabled]);
 
    
      useEffect(() => {
        // Enable the button after 4 minutes (240 seconds)
        if (counter === 0) {
          setButtonDisabled(false);
        }
      
      }, [counter]);
  return (
    <button className='button-small' onClick={()=>handleAction()} disabled={isButtonDisabled}>Resend code {<span>{Math.floor(counter / 60)}:{(counter % 60).toLocaleString('en-US', { minimumIntegerDigits: 2 })}</span>}</button>
  )
}

export default memo(Otp)