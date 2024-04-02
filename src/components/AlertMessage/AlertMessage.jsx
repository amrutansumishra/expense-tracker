import React from 'react';
import './AlertMessage.css';

const AlertMessage = ({message,action,show,display}) => {


  const handleCancel = ()=>{
    show(false)
  }

  const handleConfirm =()=>{
    show(false)
    if(action){
      action()
    }
  }


  return (
    <div className='alert-card-parent'>
 <div className='alert-card' style={{display:display?"block":"none"}} >
        <div className='alert-header'>
            {message?message:"Please pass a message ?"}
        </div>
        <div className='alert-action'>
            <button className='confirm' onClick={()=>handleConfirm()}> Yes</button>
            <button className='cancel' onClick={()=>handleCancel()}>Cancel</button>
        </div>
    </div>
    </div>
  )
}

export default AlertMessage