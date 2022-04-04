import React from "react";
import { Link } from "react-router-dom";
import CustomLink from "./../CustomLink/CustomLink";
import "./Header.css";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img
            src={require("../../images/logo.png")}
            alt=""
            style={{ width: "50px" }}
          />
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
              <CustomLink className="nav-link" to="/reviews">
                Reviews
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
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
