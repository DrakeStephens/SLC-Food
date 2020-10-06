import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";


function Nav() {
    
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <div>
        <Link to="/" >
            <img 
            alt="logo"
            src="/images/slc-food.png"
            className="navbar-brand"
            />
        </Link>
        <a href="/" className="btn btn-warning nav-item m-1" onClick={() => Auth.logout()}>
          Logout
        </a>
    </div>
      );
    } else {
      return (
            <div>
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
        </div>
      );
    }
  }

 return(
    <header className="navbar navbar-expand-lg navbar-light border-bottom"> 
            <nav>
                {showNavigation()}
            </nav>
    </header>
 )
}

export default Nav;