import React, { useEffect } from "react";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../../images/logo.png";
import Loading from "../../Shared/Loading/Loading";
import SocialLogin from "../SocialLogin/SocialLogin";
import useToken from "./../../../CustomHook/useToken";
import auth from "./../../../firebase.init";
import "./Login.css";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  const [token] = useToken(user);

  let signInError;
  const navigate = useNavigate();
  let location = useLocation();

  let from = location.state?.from.pathname || "/";

  useEffect(() => {
    if (token) navigate(from, { replace: true });
  }, [token, navigate, from]);

  if (loading || sending) {
    return <Loading />;
  }

  if (error) {
    signInError = (
      <p className="text-red-500">
        <small>{error?.message}</small>
      </p>
    );
  }

  const email = watch("email");

  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
  };

  const resetPassword = async () => {
    if (email) {
      await sendPasswordResetEmail(email);
      toast("Sent Email");
    } else {
      toast("Please Enter Your Email Address");
    }
  };

  return (
    <div className="wrapper">
      <div className="logo text-center">
        <img src={logo} className="img-fluid w-25" alt="" />
      </div>
      <div className="text-center mt-4 name">Login Form</div>
      <form onSubmit={handleSubmit(onSubmit)} className="p-3 mt-3">
        {/* Email Input Field */}
        <div>
          <div className="form-field d-flex align-items-center">
            <input
              type="email"
              placeholder="Your Email"
              className="input input-bordered"
              {...register("email", {
                required: {
                  value: true,
                  message: "Email is required",
                },
                pattern: {
                  value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                  message: "Provide a valid email",
                },
              })}
            />
          </div>
          <label className="label">
            {errors.email?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.email.message}
              </span>
            )}
            {errors.email?.type === "pattern" && (
              <span className="label-text-alt text-red-500">
                {errors.email.message}
              </span>
            )}
          </label>
        </div>
        {/* Password Input Field */}
        <div>
          <div className="form-field d-flex align-items-center">
            <input
              type="password"
              placeholder="Your Password"
              className="input input-bordered"
              {...register("password", {
                required: {
                  value: true,
                  message: "Password is required",
                },
                minLength: {
                  value: 6,
                  message: "Must be 6 characters or longer",
                },
              })}
            />
          </div>
          <label className="label">
            {errors.password?.type === "required" && (
              <span className="text-error">{errors.password.message}</span>
            )}
            {errors.password?.type === "minLength" && (
              <span className="text-error">{errors.password.message}</span>
            )}
          </label>
        </div>
        {signInError}
        <input type="submit" className="btn submitBtn mt-3" value="Login" />
      </form>
      <p className="text-center">Or, Sign In Using</p>
      <SocialLogin />
      <div className="text-center fs-6 mt-2">
        <button
          className="btn-link"
          onClick={resetPassword}
          style={{
            backgroundColor: "transparent",
            border: 0,
            textDecoration: "none",
            textTransform: "uppercase",
            fontSize: "0.75rem",
          }}
        >
          Forget password?
        </button>{" "}
        or <Link to="/signup">Sign up</Link>
      </div>
    </div>
  );
};

export default Login;
