import React from 'react';
import Nav from './nav';
import { Link } from "react-router-dom";
import '../../images/malutki.png'

const Header = () => {
  return (
    <header className="header">
      <div id="malutki" className="malutki"><img src="../../images/malutki.png" alt="malutki"/>
      
     <nav>
      <Nav></Nav>
     </nav>
     </div>
    </header>
  )
}


export default Header;

