import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { countryActions } from "../Store/store";

const GetCountries = () => {
  const dispatch = useDispatch();
  const country = useSelector((state) => state.countries);
  useEffect(() => {
    axios.get("https://api.covid19api.com/summary").then((response) => {
      console.log(response.data);
      dispatch(countryActions.reponse(response.data.Global));
      dispatch(countryActions.addCountry(response.data.Countries));
    });
  }, []);

  return <div></div>;
};

export default GetCountries;
