import React from 'react'
import AlertMessage from '../AlertMessage/AlertMessage'
import { useNavigate } from 'react-router-dom'

const Logout = ({show}) => {
  const navigate = useNavigate();

    const logoutAction=()=>{
        console.log("you have been logged out")
        navigate('/')
    }

  return (
    <AlertMessage action={logoutAction} message={"Are you sure to logout ?"} show={show} display={true} />
  )
}

export default Logout