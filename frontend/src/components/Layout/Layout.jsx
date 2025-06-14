import React from "react";
import Navbar from "../Navbar/Navbar";
import SideBar from "../SideBar/SideBar";
import Loader from "../Loader/Loader";
import './Layout.scss';

const Layout = ({children}) =>{
    return(
        <div className="app-container">
            <Loader/>
            <Navbar/>
            <div className="main-container">
                <div className="side-bar">
                    <SideBar/>
                </div>
                <div className="page-content">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Layout;