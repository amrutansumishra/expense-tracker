import React,{useEffect,useState} from 'react';
import './AlertMessage.css';

let showAlertExternal;

const AlertMessage = () => {

  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState('');
  const [onConfirm, setOnConfirm] = useState(() => () => {});
  const [onCancel, setOnCancel] = useState(() => () => {});

  useEffect(() => {
    // Expose global function
    showAlertExternal = ({ message, onConfirm, onCancel }) => {
      setMessage(message || 'Are you sure?');
      setOnConfirm(() => onConfirm || (() => {}));
      setOnCancel(() => onCancel || (() => {}));
      setVisible(true);
    };
  }, []);

  const close = () => setVisible(false);

  const handleCancel = ()=>{
    onCancel();
    close();
  }

  const handleConfirm =()=>{
    onConfirm();
    close();
  }

if (!visible) return null;

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

// Static method to expose
AlertMessage.show = (params) => {
  if (showAlertExternal) {
    showAlertExternal(params);
  } else {
    console.warn('AlertMessage component is not mounted yet.');
  }
};

export default AlertMessage