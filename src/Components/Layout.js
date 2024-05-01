import { NavLink } from "react-router-dom";
import './Navbar.css';
import Navbar from "./Navbar";

export function Layout({ children }) {
  return (
    <div className="Navigationbar">
      <Navbar />
      {children}
    </div>
  );
}

export default Layout


