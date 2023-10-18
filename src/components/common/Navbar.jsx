import React, { useRef } from "react";
import "../../assets/scss/Navbar.css";
import logo from "../../assets/images/greenlight logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navBar">
      <img src={logo} alt="Green Light Logo" className="logo" />
      <p>Green Light</p>
      <Link className="print-btn" to="/download">
        <button type="button" className="btn btn-success pro-btn"> 
          Proceed
        </button>
      </Link>
    </div>
  );
}
export default Navbar;
