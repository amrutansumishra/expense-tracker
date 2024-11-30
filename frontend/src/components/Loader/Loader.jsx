import React from 'react'
import './Loader.scss';
import { useStore } from '../../context/StoreProvider';

const Loader = () => {
  const {loader} = useStore()
  return (<>
    {loader? <div className='loader-container'>
        <span className="loader"></span>
    </div>:<></>}</>
    )
}

export default Loader