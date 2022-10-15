import React from "react";
import "../style/navbar.css"
import logo from"../assets/roket.png"

function Header(){
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
                    <div className="menu-item">
                    <a href="#contact">Contact</a>
                    </div>   
                </div>
           </div>
        </nav>

    )
}
export default Header;