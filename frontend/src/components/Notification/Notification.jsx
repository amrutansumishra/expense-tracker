import React, {useEffect, useState, useRef} from 'react';
import './Notification.css'

let showNotificationExternal;
let timeoutRef = null;

const Notification = () => {
  const [visible,setVisible] = useState(false)
  const [message,setMessage] = useState();
  const [alertType,setAlertType] = useState('info');
  
  useEffect(()=>{
    showNotificationExternal = ({message,alertType='info'})=>{
      setMessage(message)
      setAlertType(alertType)
      setVisible(true)
      if (timeoutRef) clearTimeout(timeoutRef);
      timeoutRef = setTimeout(()=>{
        setVisible(false)
      },5000)
    }
  },[])

  if(!visible) return null;

  return (
    <div className={`tn-box tn-box-color-${alertType} tn-box-active tn-box-hoverpause`}>
      <p>{message}</p>
      <div className="tn-progress"></div>
    </div>
  )
}

Notification.show = (params)=>{
  if (showNotificationExternal) {
    showNotificationExternal(params);
  } else {
    console.warn('Notification component is not mounted yet.');
  }
}

export default Notification