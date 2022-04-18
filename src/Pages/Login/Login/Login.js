import React, { useEffect, useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { toast, ToastContainer } from "react-toastify";
import Loading from "../../Shared/Loading/Loading";
import "react-toastify/dist/ReactToastify.css";
import SocialLogin from "../SocialLogin/SocialLogin";
import "./Login.css";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";
  let errorElement;
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user]);

  if (loading || sending) {
    return <Loading></Loading>;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    signInWithEmailAndPassword(email, password);
  };

  const resetPassword = async () => {
    const email = emailRef.current.value;
    if (email !== "") {
      await sendPasswordResetEmail(email);
      toast("Email Sent");
    } else {
      toast.error("please enter your email address", {
        theme: "colored",
      });
    }
  };
  if (error) {
    errorElement = <p className="text-danger"> {error?.message}</p>;
  }
  return (
    <div className="container w-50 mx-auto  p-4 logform rounded-3 my-auto">
      <h2 className="text-primary fw-bolder  text-center mt-2">Please Login</h2>

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            ref={emailRef}
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Button variant="primary w-50 mx-auto d-block mb-2" type="submit">
          Login
        </Button>
      </Form>
      {errorElement}
      <p>
        New to Tutor On The Go?
        <Link
          to="/signup"
          className="btn btn-link text-primary pe-auto text-decoration-none"
        >
          Please Register
        </Link>
      </p>
      <p>
        Forget Password?
        <button
          className="btn btn-link text-primary pe-auto text-decoration-none"
          onClick={resetPassword}
        >
          Reset Password
        </button>
      </p>

      <ToastContainer />
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;
