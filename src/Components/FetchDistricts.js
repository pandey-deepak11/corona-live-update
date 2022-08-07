import React, { useEffect, useState } from "react";
import axios from "axios";
import "./FetchDistrict.css";
import images from "./Images/images.jpg";
const FetchDistricts = () => {
  const [data, setData] = useState({});
  const [state, setState] = useState("");
  const [district, setDistrict] = useState("");
  const [search, setSearch] = useState(false);

  const changeHandlerState = (e) => {
    setState(e.target.value.slice(1, -1));
    setDistrict();
    setSearch(false);
    console.log(e.target.value.slice(1, -1));
  };

  const changeHandlerDistrict = (e) => {
    setSearch(true);
    setDistrict(e.target.value.slice(1, -1));
  };

  useEffect(() => {
    axios
      .get(`https://api.covid19tracker.in/data/static/data.min.json`)
      .then((response) => {
        setData(response.data);
        // console.log(response.data.JH.districts.Bokaro.total);
      });
  }, []);

  return (
    <div className="main">
      <div className="heading">
        <h1 className="heading">
          <em>Corona Cases in India</em>
        </h1>
      </div>
      <div className="dropdown">
        <select
          className="form-select dd1"
          aria-label="Default select example"
          onChange={changeHandlerState}
        >
          <option selected>Select your State</option>
          {Object.entries(data).map((state, index) => (
            <option value={data[state]}>({state[0]})</option>
          ))}
        </select>

        {state.length > 0 ? (
          <select
            className="form-select dd2"
            aria-label="Default select example"
            onChange={changeHandlerDistrict}
          >
            <option selected>Select your District</option>
            {Object.entries(data[state].districts).map((district, index) => (
              <option value={data[state].districts[district]}>
                ({district[0]})
              </option>
            ))}
          </select>
        ) : (
          <select
            className="form-select disabled"
            aria-label="Default select example"
          >
            <option selected>Please Select State first</option>
          </select>
        )}
      </div>
      <div className="container mt-3">
        {search ? (
          <div>
            <h1>
              Cases of {district} in {state}
            </h1>
            <h5 class="lead">One hand distance is key to end pandemic</h5>
            <table class="table table-danger">
              <thead>
                <tr>
                  <th scope="col">Confirmed Cases</th>
                  <th scope="col">Deceased Cases</th>
                  <th scope="col">Recovered Cases</th>
                  <th scope="col">Vaccinated 1</th>
                  <th scope="col">Vaccinated 2</th>
                  <th scope="col">Vaccinated Pd</th>
                  <th scope="col">Tested</th>
                  {/* <th scope="col"></th> */}
                  <th scope="col">Other</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  {/* <th scope="row">1</th> */}

                  {Object.entries(data[state].districts[district].total).map(
                    (report) => (
                      <td>{report[1]}</td>
                    )
                  )}
                </tr>
              </tbody>
            </table>
          </div>
        ) : (
          ""
        )}
        {!search && <img className="new" src={images} alt="img" />}
      </div>
    </div>
  );
};

export default FetchDistricts;
