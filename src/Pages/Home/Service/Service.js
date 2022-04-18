import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate, useParams } from "react-router-dom";
import auth from "../../../firebase.init";
import AllFunctions from "../../../Hooks/AllFunctions";
import "./Service.css";

const Service = (props) => {
  const { service } = props;
  const { name, img, description, price } = service;
  const navigate = useNavigate();
  const [
    cart,
    setCart,
    addToCart,
    addToPackage,
    DeleteItem,
    emptyCart,
    emptyPackage,
  ] = AllFunctions();

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const { id } = useParams({});

  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("service.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [id]);

  const navigateToServiceDetail = (service) => {
    addToCart(service);
    navigate("/checkout");
  };
  return (
    <div className="g-5 col-sm-12 col-md-6 col-lg-4 div-hov">
      <div className="card" style={{ width: "18rem" }}>
        <div className="img-hov">
          <img src={img} className="card-img-top " alt="..." />
        </div>

        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
          <h5 className="card-title">Price: ${price}</h5>

          <Button
            className="btn btn-dark fs-5 fw-bold  w-100 btn-hover"
            onClick={() => navigateToServiceDetail(service)}
          >
            Get It
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Service;
