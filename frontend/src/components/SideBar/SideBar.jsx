import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import Logout from '../Logout/Logout';
import { LuLayoutDashboard } from "react-icons/lu";
import { LuHandCoins } from "react-icons/lu";
import { LuLogOut } from "react-icons/lu";
import { LuUserRoundCog } from "react-icons/lu";
import './SideBar.css'

const SideBar = () => {

  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

  return (
    <>
    {<Logout setShow={setShowLogoutConfirm} displayAlert={showLogoutConfirm} />}
    <div className='side-bar-content'>
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
        <NavLink className='power-off-button' onClick={()=>setShowLogoutConfirm(true)} >
          <LuLogOut/> Logout
        </NavLink>
        </div>
    </div>
    </>
  )
}

export default SideBar