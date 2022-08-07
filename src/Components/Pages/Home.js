import React from "react";
import Carousel from "../Carousel";
import GetCountries from "../GetCountries";
import TotalInfo from "../TotalInfo";
import Navbar from "../UI/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Carousel />
      <GetCountries />
      <TotalInfo />
    </div>
  );
};

export default Home;
