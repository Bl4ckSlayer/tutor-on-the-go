import React, { useEffect } from "react";
import google from "../../../Images/social/google.png";

import github from "../../../Images/social/github.png";
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useLocation, useNavigate } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";

import "react-toastify/dist/ReactToastify.css";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);

  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  let errorMsg;

  if (loading || loading1) {
    return <Loading></Loading>;
  }

  if (error || error1) {
    errorMsg = (
      <p className="text-danger">
        ({error?.message} {error1?.message})
      </p>
    );
  }

  if (user || user1) {
    // navigate("/home");
    navigate(from, { replace: true });
  }
  // if (error || error1) {

  //       toast(`${error?.message} ${error1?.message}`)

  // }

  return (
    <div>
      <div className="d-flex align-items-center">
        <div style={{ height: "2px" }} className="bg-dark w-50"></div>
        <p className="mt-2 px-2">or</p>
        <div style={{ height: "2px" }} className="bg-dark w-50"></div>
      </div>
      {errorMsg}
      <div className="">
        <button
          onClick={() => signInWithGoogle()}
          className="btn btn-dark w-50 d-block mx-auto btn-hover fw-bolder  my-2"
        >
          <img style={{ width: "30px" }} src={google} alt="" />
          <span className="px-2">Google Sign In</span>
        </button>

        <button
          onClick={() => signInWithGithub()}
          className="btn btn-dark w-50 d-block mx-auto btn-hover fw-bolder"
        >
          <img
            className="bg-white rounded-3"
            style={{ width: "30px" }}
            src={github}
            alt=""
          />
          <span className="px-2 ">Github Sign In</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
