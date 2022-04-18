import React from "react";
import { useNavigate } from "react-router-dom";
import AllFunctions from "../../Hooks/AllFunctions";
import { getCourse } from "../Fake Data/FakeStorage";

const Checkout = (props) => {
  const data = getCourse();
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
  const { name, img, description, price } = data[0];
  const submitted = () => {
    navigate("/confirmed");
    emptyCart();
  };

  return (
    <div className="d-lg-flex m-4 align-items-center justify-content-between ">
      <div class="card mb-3 w-50 me-4   ">
        <h1
          className="text-center
        "
        >
          Details
        </h1>
        <img class="card-img-top img-fluid " src={img} alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">{name}</h5>
          <p class="card-text">{description}</p>
          <h5 class="card-text">price :${price}</h5>
        </div>
      </div>
      <div className="w-50">
        <form onSubmit={submitted}>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label for="inputEmail4">Email</label>
              <input
                type="email"
                className="form-control"
                id="inputEmail4"
                placeholder="Email"
              />
            </div>
          </div>
          <div className="form-row col-md-6">
            <label for="inputAddress">Address</label>
            <input
              type="text"
              className="form-control"
              id="inputAddress"
              placeholder="1234 Main St"
            />
          </div>

          <div className="form-row">
            <div className="form-group col-md-6">
              <label for="inputCity">City</label>
              <input type="text" className="form-control" id="inputCity" />
            </div>

            <div className="form-group col-md-3">
              <label for="inputZip">Zip</label>
              <input type="text" className="form-control" id="inputZip" />
            </div>
          </div>

          <button type="submit" className="btn btn-primary mt-3">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
