import React from "react";
import "../style/navbar.css"
import {Navbar,Nav,NavDropdown} from "react-bootstrap";
import logo from"../assets/roket.png"

function Header(){
    return(
        <div className="mainNav">
            <Navbar >
                <div className="logo" >
                    <Navbar.Brand href="#home"><img src={logo} alt="logo" className="logo" /></Navbar.Brand>
                    <Navbar.Brand className="brand" href="#home">ROCKET LINK</Navbar.Brand>
                </div>
                <Nav className="mr-auto">
                    <div className="hover">
                        <Nav.Link className="fontLink" href="#home">Home</Nav.Link>
                    </div>
                    <div className="hover">
                        <Nav.Link className="fontLink" href="#features">Features</Nav.Link>
                    </div>
                    <div className="hover">
                        <Nav.Link className="fontLink" href="#pricing">Pricing</Nav.Link>
                    </div> 
                </Nav>

            </Navbar>
        </div>
    )
}
export default Header;