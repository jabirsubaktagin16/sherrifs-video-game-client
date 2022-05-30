import { faGithub, faGooglePlusG } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "./../../../firebase.init";

const SocialLogin = () => {
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);

  const [signInWithGithub, githubUser, githubLoading, githubError] =
    useSignInWithGithub(auth);

  const navigate = useNavigate();

  const location = useLocation();

  let from = location.state?.from?.pathname || "/";

  if (googleError || githubError)
    toast.error(googleError?.message || githubError?.message);

  // if (googleLoading || githubLoading) return <Loading />;

  useEffect(() => {
    if (googleUser || githubUser) navigate(from, { replace: true });
  }, [googleUser, githubUser, navigate, from]);

  return (
    <div className="d-flex text-center justify-content-center mt-2 gap-4">
      <button
        onClick={() => signInWithGoogle()}
        className="brand-btn border-0"
        id="google-btn"
      >
        <FontAwesomeIcon icon={faGooglePlusG} />
      </button>
      <button
        onClick={() => signInWithGithub()}
        className="brand-btn border-0"
        id="github-btn"
      >
        <FontAwesomeIcon icon={faGithub} />
      </button>
    </div>
  );
};

export default SocialLogin;
