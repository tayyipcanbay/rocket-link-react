import React from "react";
import "../style/navbar.css"
import {Link }  from "react-router-dom";

function Navbar(){
    return(
        <nav>
          <div className="nav-wrapper">
            <Link to="/" className="brand-logo">ROCKET LİNK</Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><Link to="#">Home</Link></li>
                <li><Link to="#about">About</Link></li>
                <li><Link to="#contact">Contact</Link></li>
            </ul>
          </div>
        </nav>

    )
}
export default Navbar;