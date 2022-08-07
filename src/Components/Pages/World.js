import React from "react";
import CountriesList from "../CountriesList";
import GetCountries from "../GetCountries";
import Navbar from "../UI/Navbar";

const World = () => {
  return (
    <div>
      <Navbar />
      <GetCountries />
      <CountriesList />
    </div>
  );
};

export default World;
