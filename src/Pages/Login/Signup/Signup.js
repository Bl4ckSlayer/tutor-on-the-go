import React, { useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  useCreateUserWithEmailAndPassword,
  useSendEmailVerification,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";
import { Button, Form } from "react-bootstrap";
import Loading from "../../Shared/Loading/Loading";

const Signup = () => {
  let errorMsg;
  const nameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const confirmPasswordRef = useRef("");
  const [errorMessage, setErrorMessage] = useState("");
  const [agree, setAgree] = useState(false);

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, updating] = useUpdateProfile(auth);
  const [email, setEmail] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  if (user) {
    navigate(from, { replace: true });
  }
  if (loading || updating) {
    return <Loading></Loading>;
  }
  const handleSignup = async (event) => {
    event.preventDefault();

    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;
    setErrorMessage("");
    console.log(name, email, password, confirmPassword);

    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });

    console.log(user);
  };
  if (error) {
    errorMsg = <p>{error?.message}</p>;
  }

  return (
    <div className="container w-50 mx-auto logform p-4 rounded-3">
      <h2 className="text-primary text-center mt-2">Sign Up</h2>

      <Form onSubmit={handleSignup}>
        <Form.Group className="mb-3" controlId="formGroupName">
          <Form.Control
            type="text"
            ref={nameRef}
            placeholder="Your name"
            style={{ border: "1px", color: "#FFCA2C" }}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            ref={emailRef}
            type="email"
            placeholder="Enter asd email"
            style={{ border: "1px", color: "#FFCA2C" }}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Password"
            style={{ border: "1px", color: "#FFCA2C" }}
            required
          />
        </Form.Group>
        <input
          onClick={() => setAgree(!agree)}
          type="checkbox"
          name="terms"
          id="terms"
          className="me-2"
        />
        <label
          className={` ${agree ? "text-primary" : "text-danger"}`}
          htmlFor="terms"
        >
          Accept Our Terms and Conditions
        </label>
        <Button
          disabled={!agree}
          variant="primary w-50 mx-auto d-block mb-2"
          type="submit"
        >
          Sign Up
        </Button>
      </Form>
      <h6 className="text-danger"> {errorMsg}</h6>

      <p className="text-center">
        <span className="pe-2">Already Signed Up...</span>
        <Link to="/login" className="text-primary pe-auto text-decoration-none">
          Please Login!!
        </Link>
      </p>
      <ToastContainer />
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Signup;
