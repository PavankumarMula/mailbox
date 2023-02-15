import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authSliceActions } from "../store/AuthSlice";
const Navbar = () => {
  const disptach = useDispatch();
  const logoutHandler = () => {
    disptach(authSliceActions.logout());
  };
  return (
    <nav className="navbar">
      <h1 className="navbar-header">MailBox</h1>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/home" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/login" className="nav-link">
            Login
          </Link>
        </li>
        <button className="button" onClick={logoutHandler}>
          logout
        </button>
      </ul>
    </nav>
  );
};

export default Navbar;
