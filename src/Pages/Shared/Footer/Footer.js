import React from "react";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();

  return (
    <footer className="text-center footer mt-5 bg-dark  text-white align-items-center">
      <h4 className="pt-4">
        <small>&copy; {year} </small> tutor-one-the-go.web.app / The Tutor
        Review. Not Affiliated with Anyone
      </h4>
      All reserved by tutor on the go
    </footer>
  );
};

export default Footer;
