// components/Logout/Logout.jsx
import React from 'react';
import AlertMessage from '../AlertMessage/AlertMessage';
import { useLogout } from '../../hooks/useLogout';

const Logout = ({ setShow, displayAlert }) => {
  const logout = useLogout();

  return (
    <>
      {displayAlert && <AlertMessage
        action={logout}
        message="Are you sure to logout?"
        setShow={setShow}
      />}
    </>
  );
};

export default Logout;
