import React from 'react'
import { NavLink } from 'react-router-dom';
import AlertMessage from '../AlertMessage/AlertMessage';
import { useStore } from '../../context/StoreProvider';
import { LuLayoutDashboard, LuHandCoins, LuLogOut,  LuUserRoundCog } from "react-icons/lu";
import { useLogout } from '../../hooks/useLogout';
import profile from "../../assets/images/profile.png";
import './SideBar.css'

const SideBar = () => {

  const {userDetails} = useStore();
  const logout = useLogout();

  const handleClickLogout = () => {
    AlertMessage.show({
      message: 'Are you sure to logout?',
      onConfirm: logout,
      onCancel: () => {},
    });
  };

  return (
    <>
    <div className='side-bar-content'>
      <div className='side-profile'>
        <div className='profile-avatar'>
          <img src={profile} alt="profile-img" />
        </div>
        <div className='profile-name'>
          {userDetails.name}
        </div>
      </div>
        <div className='side_bar_menu'>
        
              <NavLink to="/dashboard" end className={({ isActive }) => isActive ? 'side_bar_menu_items side_bar_menu_active' : 'side_bar_menu_items'}>
                <LuLayoutDashboard size={22}/>Dashboard
              </NavLink>
            
              <NavLink to="/transaction" end className={({ isActive }) => isActive ? 'side_bar_menu_items side_bar_menu_active' : 'side_bar_menu_items'}>
                <LuHandCoins size={22}/>Expense
              </NavLink>

              <NavLink to="/Profile" end className={({ isActive }) => isActive ? 'side_bar_menu_items side_bar_menu_active' : 'side_bar_menu_items'}>
                <LuUserRoundCog size={22}/>Profile
              </NavLink>
         
        </div>
        <div className='side_bar_footer'>
        <NavLink className='power-off-button' onClick={()=>handleClickLogout(true)} >
          <LuLogOut/> Logout
        </NavLink>
        </div>
    </div>
    </>
  )
}

export default SideBar