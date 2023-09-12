import React  from "react";
import { NavLink } from "react-router-dom";

const Navbers =  () =>{
    return  (
        <header className="topbar">
          <nav>
          <ul className="Navs"> 
             
             <li> <NavLink to="/" className="navlink">Home</NavLink> </li>
             <li> <NavLink to="/cp" className="navlink">CP</NavLink> </li>
             <li> <NavLink to="/project" className="navlink">Project</NavLink> </li>
             <li> <NavLink to="/Achievment" className="navlink">Achievment</NavLink> </li>
             <li> <NavLink to="/Education" className="navlink">Education</NavLink> </li>
             <li> <NavLink to="/Skills" className="navlink">Skills</NavLink> </li>
             <li> <NavLink to="/Experience" className="navlink">Experience</NavLink> </li>
             <li> <NavLink to="/contact" className="navlink">Contact</NavLink> </li>
             <li> <NavLink to="/about" className="navlink">About</NavLink> </li>
             
             
          </ul>
          </nav>
        </header>
      );
};

export default Navbers;