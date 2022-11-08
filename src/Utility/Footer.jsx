import React from "react";

const Footer = ({ title }) => {
  return (
    <div className="footerComponent">
      <h1>
        {title}
        <i class="fa-solid fa-angles-left"></i>
      </h1>
    </div>
  );
};

export default Footer;
