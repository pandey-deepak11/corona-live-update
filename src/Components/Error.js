import React from "react";
import img from "./Images/404.gif";
import "./Error.css";

const Error = () => {
  return (
    <div>
      <h1>Sorry, The page you requested doesn't exist for now.</h1>
      <img className="image" src={img} alt="404 " />
    </div>
  );
};

export default Error;
