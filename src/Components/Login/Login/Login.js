import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../images/logo.png";
import SocialLogin from "../SocialLogin/SocialLogin";
import "./Login.css";

const Login = () => {
  return (
    <div className="wrapper">
      <div className="logo text-center">
        <img src={logo} className="img-fluid w-25" alt="" />
      </div>
      <div className="text-center mt-4 name">Login Form</div>
      <form className="p-3 mt-3">
        <div className="form-field d-flex align-items-center">
          <span className="far fa-user"></span>
          <input
            type="email"
            name="userEmail"
            id="userEmail"
            placeholder="Email"
            required
          />
        </div>
        <div className="form-field d-flex align-items-center">
          <span className="fas fa-key"></span>
          <input
            type="password"
            name="password"
            id="pwd"
            placeholder="Password"
            required
          />
        </div>
        <button className="btn mt-3">Login</button>
      </form>
      <p className="text-center">Or, Sign In Using</p>
      <SocialLogin />
      <div className="text-center fs-6 mt-2">
        <a href="#">Forget password?</a> or <Link to="/signup">Sign up</Link>
      </div>
    </div>
  );
};

export default Login;
