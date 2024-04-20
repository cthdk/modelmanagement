import { NavLink } from "react-router-dom";
import './Navbar.css';

export function Navbar() {
    return (
      <nav className="navbar">
       <NavLink to="/create-new-model" className="navLink"> 
        Create new model
       </NavLink>
       <NavLink to="/create-new-manager" className="navLink">
        Create new manager
       </NavLink>
       <NavLink to="/create-new-job" className="navLink">
        Create new job
       </NavLink>
      </nav>
     );
   }