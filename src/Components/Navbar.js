import { NavLink } from "react-router-dom";
import './Navbar.css';

export function Navbar() {
    return (
      <nav className="navbar">
       <NavLink to="/homepage" className="navLink"> 
        Homepage
       </NavLink>
       <NavLink to="/create-new-model" className="navLink"> 
        New model
       </NavLink>
       <NavLink to="/create-new-manager" className="navLink">
        New manager
       </NavLink>
       <NavLink to="/create-new-job" className="navLink">
        New job
       </NavLink>
       <NavLink to="/all-jobs" className="navlink">
        All Jobs
       </NavLink>
      </nav>
     );
   }

export default Navbar