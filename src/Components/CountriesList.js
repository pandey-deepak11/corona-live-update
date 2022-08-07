import React from "react";
import { useSelector } from "react-redux";
import "./CountriesList.css";

const CountriesList = () => {
  const Searchedcountry = useSelector((state) => state.countries);

  const filteredcountry = useSelector((state) => state.filteredCountries) || [];

  const country =
    filteredcountry.length > 0 ? filteredcountry : Searchedcountry;

  return (
    <>
      <table className="table table-hover mt-2">
        <thead>
          <tr>
            <th scope="col">Country Name</th>
            <th scope="col">Total Cases</th>
            <th scope="col">New Cases</th>
            <th scope="col">Total Recovered</th>
            <th scope="col">New Recovered</th>
            <th scope="col">New Fatalities</th>
            <th scope="col">Total Deaths</th>
          </tr>
        </thead>
        <tbody>
          {country.map((c, index) => (
            <tr>
              <td>{c.Country}</td>
              <td>{c.TotalConfirmed}</td>
              <td>
                {c.NewConfirmed}
                <span className="badge">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </td>
              <td>{c.NewRecovered}</td>
              <td>{c.TotalRecovered}</td>
              <td>{c.NewDeaths}</td>
              <td>{c.TotalDeaths}</td>
            </tr>
          ))}
        </tbody>
      </table>
      ) )
    </>
  );
};

export default CountriesList;
