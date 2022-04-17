import React from "react";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";

const Home = (props) => {
  const { services } = props;
  return (
    <div>
      <Banner></Banner>
      <Services services={services}></Services>
    </div>
  );
};

export default Home;
