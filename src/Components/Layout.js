import './Navbar.css';
import ModelNavbar from "./ModelNavbar";
import ManagerNavbar from "./ManagerNavbar";

export function Layout({ children }) {
  return (
    <div className="Navigationbar">
       {localStorage.getItem('role') == 'Manager' ? <ManagerNavbar/> : <ModelNavbar/>}
      {children}
    </div>
  );
}


export default Layout


