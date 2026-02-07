import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { FaHome, FaInfoCircle, FaUsers, FaImages, FaPhone } from "react-icons/fa";
import logo from "../images/logo.png"; // make sure path is correct

function Navbar() {
  return (
    <nav className="nav">
      
      {/* LEFT MENU */}
      <div className="menu">
        <NavLink to="/" end className="nav-item">
          <FaHome /> Home
        </NavLink>

        <NavLink to="/about" className="nav-item">
          <FaInfoCircle /> About
        </NavLink>

        <NavLink to="/members" className="nav-item">
          <FaUsers /> Members
        </NavLink>

        <NavLink to="/activity" className="nav-item">
          <FaImages /> Activity
        </NavLink>

        <NavLink to="/contact" className="nav-item">
          <FaPhone /> Contact
        </NavLink>
      </div>

      {/* RIGHT LOGO */}
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>

    </nav>
  );
}

export default Navbar;
