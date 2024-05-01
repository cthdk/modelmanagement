import { NavLink } from "react-router-dom";
import './Navbar.css';
import Navbar from "./Navbar";

export function Layout({ children }) {
  return (
    <div className="Navigationbar">
       {localStorage.getItem('role') == 'Manager' ? <Navbar/> : <></>}
      {children}
    </div>
  );
}


export default Layout


