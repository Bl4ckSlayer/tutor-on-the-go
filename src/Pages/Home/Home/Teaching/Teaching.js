import React from "react";
import "./Teaching.css";

const Teaching = () => {
  return (
    <div>
      <h1>How I teach</h1>
      <div className="d-lg-flex align-items-center justify-content-center ">
        <div class="embed-responsive embed-responsive-16by9">
          <iframe
            className="iframe"
            src="https://www.youtube.com/embed/f_uwKZIAeM0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div className="ps-4">
          <h3>Learn with Animation</h3>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default Teaching;
