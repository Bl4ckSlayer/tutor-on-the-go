import React, { useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import { toast, ToastContainer } from "react-toastify";
import SocialLogin from "../SocialLogin/SocialLogin";

const Signup = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const [agree, setAgree] = useState(false);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const navigate = useNavigate();

  const handleSignup = async (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const name = event.target.name.value;
    console.log(name);
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });

    navigate("/home");
  };
  if (loading || updating) {
    return <Loading></Loading>;
  }
  return (
    <div className="container w-50 mx-auto logform p-4 rounded-3">
      <h2 className="text-primary text-center mt-2">Sign Up</h2>
      <Form onSubmit={handleSignup}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            name="name"
            aria-describedby="basic-addon1"
            required
          />
        </Form.Group>
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
