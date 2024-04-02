import React, { useState } from 'react'
import './SideBar.css'
import 'boxicons';
import home from './home.svg'
import detail from './detail.svg'
import poweroff from './poweroff.svg'
import { Link } from 'react-router-dom';
import Logout from '../Logout/Logout';

const SideBar = () => {

  const [logout,setLogout] = useState(false)

  return (
    <>
    {logout&&<Logout show={setLogout}/>}
    <div className='side_bar'>
        <div className='side_bar_header'>
          <div className='logo'>OyeYar</div>
        </div>
        <div className='side_bar_menu'>
        
              <Link className='side_bar_menu_items side_bar_menu_active' to="/dashboard">
              <img src={home} alt="img"/>Dashboard</Link>
            
              <Link className='side_bar_menu_items' to="/transaction"><img src={detail} alt="img"/>  Transactions</Link>
            
        
              <Link className='side_bar_menu_items' to="/profile">
              <box-icon name="user"></box-icon>  Profile
              </Link>
         
        </div>
        <div className='side_bar_footer'>
        <Link className='power-off-button' onClick={()=>setLogout(true)} >
        <img src={poweroff} alt="img"/> Logout
              </Link>
        </div>
    </div>
    </>
  )
}

export default SideBar