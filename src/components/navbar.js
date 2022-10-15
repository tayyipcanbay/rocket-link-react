import React from "react";
import "../style/navbar.css"
import logo from"../assets/roket.png"
import {Link }  from "react-router-dom";

function Navbar(){
    return(
        <nav>
           <div className="navbar">
                <div className="brand">
                    <h1>ROKET LINK</h1>
                </div>
                <div className="menu">
                    <div className="menu-item">
                        <a href="#">Home</a>
                    </div>    
                    <div className="menu-item">
                        <a href="#about">About</a>
                    </div>    
                    <div className="menu-item loginBox">
                        <Link to="/login">Login</Link>
                    </div>
                    <div className="menu-item registerBox">
                        <Link to="/login">Register</Link>
                    </div>
                </div>
           </div>
        </nav>

    )
}
export default Navbar;