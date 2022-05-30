import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../images/logo.png";
import SocialLogin from "../SocialLogin/SocialLogin";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleEmailBlur = (event) => setEmail(event.target.value);
  const handlePasswordBlur = (event) => setPassword(event.target.value);
  const handleConfirmPasswordBlur = (event) =>
    setConfirmPassword(event.target.value);

  return (
    <div className="wrapper">
      <div className="logo text-center">
        <img src={logo} className="img-fluid w-25" alt="" />
      </div>
      <div className="text-center mt-4 name">Sign Up Form</div>
      <form className="p-3 mt-3">
        <div className="form-field d-flex align-items-center">
          <span className="far fa-user"></span>
          <input
            onBlur={handleEmailBlur}
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
            onBlur={handlePasswordBlur}
            type="password"
            name="password"
            id="pwd"
            placeholder="Password"
            required
          />
        </div>
        <div className="form-field d-flex align-items-center">
          <span className="fas fa-key"></span>
          <input
            onBlur={handleConfirmPasswordBlur}
            type="password"
            name="confirm-password"
            id="confirm-pwd"
            placeholder="Confirm Password"
            required
          />
        </div>
        <input type="submit" value="Sign Up" className="btn" />
      </form>
      <p className="text-center">Or, Sign Up Using</p>
      <SocialLogin />
      <div className="text-center fs-6 mt-3">
        <p>
          <small>Already Have an Account?</small> <small>Use</small>{" "}
          <Link to="/login">Login</Link>.
        </p>
      </div>
    </div>
  );
};

export default SignUp;
