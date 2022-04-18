import React from "react";
import pic from "../../Images/119612-.jpg";

const About = () => {
  return (
    <div>
      <div className="d-lg-flex  m-4 p-4 align-content-center align-items-center">
        <div className="w-50 p-4">
          <h1 className="text-warning ">
            HI I Am <span className="text-danger fw-bolder">AMIRUL ISLAM</span>
          </h1>
          <h5>
            I am a CSE Engineer.Currently i am learning web development.I want
            to make my career on web devoleopment. I am a very Efficient learner
            and try my best.My future goal is to learn python.and do a job inm a
            respected company.
          </h5>
          <h6>
            To achive my finest goal i will try to be more sincere on my task. I
            will learn many more languages and cope up with this modern world.{" "}
          </h6>
        </div>
        <img src={pic} className="img-fluid" alt="" />
      </div>
    </div>
  );
};

export default About;
