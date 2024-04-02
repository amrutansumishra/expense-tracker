import React from 'react';
import './Notification.css'

const Notification = ({message}) => {
  return (
    
    message?<div className="tn-box tn-box-color-1 tn-box-active tn-box-hoverpause">
	<p>{message}</p>
	<div className="tn-progress"></div>
</div>:<></>
    
    
  )
}

export default Notification