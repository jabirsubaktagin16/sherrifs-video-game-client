import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import logo from "../../../images/logo.png";
import CustomLink from "./../CustomLink/CustomLink";
import "./Header.css";

const Header = () => {
  const [user, loading, error] = useAuthState(auth);

  const handleSignOut = () => signOut(auth);

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="" style={{ width: "50px" }} />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <CustomLink className="nav-link" to="/">
                Home
              </CustomLink>
            </li>
            <li className="nav-item">
              <CustomLink className="nav-link" to="/games">
                Games
              </CustomLink>
            </li>
            <li className="nav-item">
              <CustomLink className="nav-link" to="/dashboard">
                Dashboard
              </CustomLink>
            </li>
            <li className="nav-item">
              <CustomLink className="nav-link" to="/blogs">
                Blogs
              </CustomLink>
            </li>
            {user ? (
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {user?.displayName}
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Profile
                    </a>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/login"
                      onClick={handleSignOut}
                    >
                      Sign Out
                    </Link>
                  </li>
                </ul>
              </li>
            ) : (
              <li className="nav-item">
                <CustomLink className="nav-link" to="/login">
                  Login/Register
                </CustomLink>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
