import React from "react";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../images/logo.png";
import Loading from "../../Shared/Loading/Loading";
import SocialLogin from "../SocialLogin/SocialLogin";
import useToken from "./../../../CustomHook/useToken";
import auth from "./../../../firebase.init";

const SignUp = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  const [token] = useToken(user);

  let signUpError;

  const navigate = useNavigate();

  if (loading || updating) {
    return <Loading />;
  }

  if (error || updateError) {
    signUpError = (
      <p className="text-error">
        <small>{error?.message}</small>
      </p>
    );
  }

  const onSubmit = async (data) => {
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
    toast.success("Update Done");
  };

  if (token) navigate("/");

  return (
    <div className="wrapper">
      <div className="logo text-center">
        <img src={logo} className="img-fluid w-25" alt="" />
      </div>
      <div className="text-center mt-4 name">Sign Up Form</div>
      <form onSubmit={handleSubmit(onSubmit)} className="p-3 mt-3">
        {/* Name Input Field */}
        <div className="form-field d-flex align-items-center">
          <input
            type="text"
            placeholder="Your Name"
            {...register("name", {
              required: {
                value: true,
                message: "Name is required",
              },
            })}
          />
          <label className="label">
            {errors.name?.type === "required" && (
              <span>{errors.name.message}</span>
            )}
          </label>
        </div>
        {/* Email Input Field */}
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
          <label className="label">
            {errors.email?.type === "required" && (
              <span>{errors.email.message}</span>
            )}
            {errors.email?.type === "pattern" && (
              <span>{errors.email.message}</span>
            )}
          </label>
        </div>
        {/* Password Field */}
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
          <label className="label">
            {errors.password?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.password.message}
              </span>
            )}
            {errors.password?.type === "minLength" && (
              <span className="label-text-alt text-red-500">
                {errors.password.message}
              </span>
            )}
          </label>
        </div>
        {signUpError}
        <input type="submit" value="Sign Up" className="btn submitBtn" />
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
