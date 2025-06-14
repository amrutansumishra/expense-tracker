import React from 'react';
import './AlertMessage.css';

const AlertMessage = ({message,action,setShow}) => {


  const handleCancel = ()=>{
    setShow(false)
  }

  const handleConfirm =()=>{
    setShow(false)
    if(action){
      action()
    }
  }


  return (
    <div className='alert-card-parent'>
      <div className='alert-card'>
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