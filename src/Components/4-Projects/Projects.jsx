

import React from 'react';
import "./projects.css"
import { NavLink } from 'react-router-dom';


function Sec2() {

  let linkStyle = ({ isActive }) => {
    return {
      background: isActive ? "linear-gradient(112.1deg, #174161 30.4%, #29043a 100.2%)" : "#2a2a2a",
    }
}

  return (

      <div className="sec2" id='projects'>
        <div>
          <p className='hederName'>My Projects</p>
          <p className='pClass'>My name is Gamal, I live in Bihera, This is the first project in react js . </p>
        </div>
      <div>
        
          <div className='link-all'>
            <NavLink to="/first" className="linkA" style={linkStyle}>1st section</NavLink>
            <NavLink to="/scound" className="linkA linkB" style={linkStyle}>2nd section</NavLink>
            <NavLink to="/third" className="linkA" style={linkStyle}>3rd section</NavLink>
          </div>
          
        </div>
      </div>

  );
}

export default Sec2;





