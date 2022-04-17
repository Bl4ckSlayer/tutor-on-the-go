import React from "react";
import { Button } from "react-bootstrap";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";

const Service = (props) => {
  const { service } = props;
  const { name, img, description, price } = service;
  const navigate = useNavigate();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const navigateToServiceDetail = () => {
    navigate("/checkout");
  };
  return (
    <div className="g-5 col-sm-12 col-md-6 col-lg-4">
      <div className="card" style={{ width: "18rem" }}>
        <img src={img} className="card-img-top " alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
          <h5 className="card-title">Price: ${price}</h5>

          <Button
            className="btn btn-primary "
            onClick={() => navigateToServiceDetail()}
          >
            Get It
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Service;
