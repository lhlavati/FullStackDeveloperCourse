import React, { useContext } from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext.js";

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
        </div>
        <div className="links">
          <span>{currentUser?.username}</span>
          {currentUser ? (
            <span onClick={logout}>Logout</span>
          ) : (
            <Link className="link" to="/login">
              Login
            </Link>
          )}
          <span className="write">
            <Link className="link" to="/write-note">
              +
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
