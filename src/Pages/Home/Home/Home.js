import React from "react";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";
import Teaching from "./Teaching/Teaching";

const Home = (props) => {
  const { services } = props;
  return (
    <div>
      <Banner></Banner>
      <Services services={services}></Services>
      <Teaching></Teaching>
    </div>
  );
};

export default Home;
