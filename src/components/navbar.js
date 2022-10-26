import React from "react";
import "../style/navbar.css"
import {Link }  from "react-router-dom";

function Navbar(){
    return(
        <nav>
          <div className="nav-wrapper">
            <Link to="/" className="brand-logo">ROCKET LINK</Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><Link to="/login">Login | Register</Link></li>
            </ul>
          </div>
        </nav>

    )
}
export default Navbar;