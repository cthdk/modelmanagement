import { NavLink } from "react-router-dom";
import './Navbar.css';

export function ManagerNavbar() {
    return (
      <nav className="navbar">
       <NavLink to="/homepage" className="navLink"> 
        Homepage
       </NavLink>
       <NavLink to="/model" className="navLink"> 
        Model
       </NavLink>
       <NavLink to="/manager" className="navLink">
        Manager
       </NavLink>
       <NavLink to="/jobs" className="navLink">
        Jobs
       </NavLink>
      </nav>
     );
   }

export default ManagerNavbar