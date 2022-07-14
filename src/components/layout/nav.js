import React from 'react';
import { Link } from "react-router-dom";




const Nav = () => {
  return (
    <div id="navigation" className="navigation">
      <nav>
        <ul >
          <li>
          <Link as={Link} to="/">Home</Link>
          </li>
          <li>
          <Link as={Link} to="/villa">Villa</Link>
          </li>
          
         
        
        </ul>
      </nav>
    </div>
  )
}

export default Nav;