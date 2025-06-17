// hooks/useLogout.js
import { useNavigate } from 'react-router-dom';
import { googleLogout } from '@react-oauth/google';
import { useStore } from '../context/StoreProvider';

export const useLogout = () => {
  const { setUserDetails } = useStore();
  const navigate = useNavigate();

  const logout = () => {
    sessionStorage.removeItem('authToken');
    googleLogout();
    setUserDetails({});
    navigate('/');
    console.log('You have been logged out');
  };

  return logout;
};
