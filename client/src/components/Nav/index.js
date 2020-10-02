import React from "react";
//import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function Nav() {
 return(
    <header className="navbar navbar-expand-lg navbar-light border-bottom"> 
            <nav>
                <Link to="/" >
                    <img 
                        alt="logo"
                        src="/images/slc-food.png"
                        className="navbar-brand"
                    />
                </Link>
                <Link to="/login">
                    <button className="btn btn-warning nav-item m-1">Login</button>
                </Link>
                <Link to="/signup">
                    <button className="btn btn-warning nav-item m-1">Signup</button>
                </Link>
                <Link to="/">
                    <button className="btn btn-warning nav-item m-1">Example</button>
                </Link>
            </nav>
        
  </header>
 )
}

export default Nav;