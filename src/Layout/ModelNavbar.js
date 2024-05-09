import { NavLink } from "react-router-dom";
import './Navbar.css';

export function ModelNavbar() {
    return (
      <nav className="navbar">
       <NavLink to="/homepage" className="navLink"> 
        Homepage
       </NavLink>
       <NavLink to="/myjobs" className="navLink"> 
        My jobs
       </NavLink>

      </nav>
     );
   }

export default ModelNavbar