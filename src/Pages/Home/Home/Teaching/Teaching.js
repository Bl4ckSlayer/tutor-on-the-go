import React from "react";
import "./Teaching.css";

const Teaching = () => {
  return (
    <div className="mt-4 text-center align-items-center justify-content-center ">
      <h1 className="mt-4 mb-4 text-center ">
        <span className="bg-warning p-1 rounded-3 "> How I teach</span>
      </h1>
      <div className="d-lg-flex align-items-center justify-content-center  ">
        <iframe
          className="iframe1 m-4  "
          src="https://www.youtube.com/embed/f_uwKZIAeM0"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>

        <div className="ps-2 order-md-1 text-center w-50 teach">
          <h2>Learn With Animation</h2>
          <h5 className="text-warning">
            Teaching is an art. So i try to achive that art. I like to teach my
            student with proper knowledge and try to help them to achive their
            goal
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Teaching;
