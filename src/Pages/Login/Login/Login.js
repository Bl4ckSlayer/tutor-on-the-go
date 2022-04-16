import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";

const Login = () => {
  const emailRef = useRef("");
  const passRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const pass = passRef.current.value;
    signInWithEmailAndPassword(email, pass);
  };
  const [sendPasswordResetEmail, sending, error1] =
    useSendPasswordResetEmail(auth);
  let errorMsg;
  if (error) {
    errorMsg = <p>Error: {error?.message}</p>;
  }
  const navigateRegister = (e) => {
    navigate("/signup");
  };
  if (user) {
    navigate(from, { replace: true });
  }
  const resetPass = async () => {
    const email = emailRef.current.value;
    await sendPasswordResetEmail(email);
    alert("Sent email");
    console.log("pass reset");
  };
  return (
    <div className="container w-50 mx-auto">
      <h2>please log in</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            ref={emailRef}
            type="email"
            placeholder="Enter email"
            required
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            ref={passRef}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      {errorMsg}
      <p>
        New to here
        <span className="text-danger" onClick={navigateRegister}>
          Please register
        </span>
      </p>
      <p>
        forget pass
        <span className="text-danger " onClick={resetPass}>
          reset pass
        </span>
      </p>
    </div>
  );
};

export default Login;
