import React from "react";
//import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function Nav() {
 return(
    <header className="navbar navbar-expand-lg navbar-light"> 
            <nav>
                <Link to="/" >
                    <img 
                        alt="logo"
                        src="/images/slc-food.png"
                        className="navbar-brand"
                    />
                </Link>
        
        
                <Link to="/">
                    <button className="btn btn-warning nav-item m-1">Example</button>
                </Link>
                <Link to="/">
                    <button className="btn btn-warning nav-item m-1">Example</button>
                </Link>
                <Link to="/">
                    <button className="btn btn-warning nav-item m-1">Example</button>
                </Link>
            </nav>
        
  </header>
 )
}

export default Nav;