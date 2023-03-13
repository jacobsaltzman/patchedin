import React from "react";
import { Link } from 'react-router-dom';


function Navigation(){

  return(
    <header>
      
      <div className="navbar">
        <div id="signin-signout">
        
            
        </div>

        <div id="nav-links">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>

        </div>

      </div>
    </header>
  )
}

export default Navigation;