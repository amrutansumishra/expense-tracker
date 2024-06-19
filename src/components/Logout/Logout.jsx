import React, { useContext } from 'react'
import AlertMessage from '../AlertMessage/AlertMessage'
import { useNavigate } from 'react-router-dom'
import { googleLogout } from '@react-oauth/google';
import { contextApp } from '../../context/createContext';

googleLogout();

const Logout = ({show}) => {
  const globalData = useContext(contextApp)
  const {setValiduser} = globalData
  const navigate = useNavigate();

    const logoutAction=()=>{
        console.log("you have been logged out")
        googleLogout();
        setValiduser(false)
        navigate('/')
    }

  return (
    <AlertMessage action={logoutAction} message={"Are you sure to logout ?"} show={show} display={true} />
  )
}

export default Logout