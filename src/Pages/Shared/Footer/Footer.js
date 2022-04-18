import React from "react";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();

  return (
    <footer className="text-center footer mt-5 bg-dark  text-white align-items-center">
      <h3 className="pt-4">
        <small>copyright &copy; {year} </small>
      </h3>
      All reserved by tutor on the go
    </footer>
  );
};

export default Footer;
