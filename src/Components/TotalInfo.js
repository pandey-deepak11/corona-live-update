import React from "react";
import { useSelector } from "react-redux";
const TotalInfo = () => {
  const data = useSelector((state) => state.global);
  const { NewConfirmed, NewDeaths, TotalConfirmed, TotalDeaths, Date } = data;

  return (
    <div className="row row-cols-1 row-cols-md-3 mb-3 text-center mt-5">
      <div className="col">
        <div className="card mb-4 rounded-3 shadow-sm bg-warning">
          <div className="card-header py-3">
            <h4 className="my-0 fw-normal">
              <strong>Total Cases</strong>
            </h4>
          </div>
          <div className="card-body">
            <h1 className="card-title pricing-card-title">{TotalConfirmed}</h1>
            <ul className="list-unstyled mt-3 mb-4">
              <li>
                <h2>{NewConfirmed}⬆️</h2>
              </li>
            </ul>
            <h4>Last Updated :</h4>
            <h5>{Date}</h5>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card mb-4 rounded-3 shadow-sm bg-success">
          <div className="card-header py-3">
            <h4 className="my-0 fw-normal">
              <strong>Total Recovered</strong>
            </h4>
          </div>
          <div className="card-body">
            <h1 className="card-title pricing-card-title">
              {TotalConfirmed - TotalDeaths}
            </h1>
            <ul className="list-unstyled mt-3 mb-4">
              <li>
                <h2>{NewConfirmed - NewDeaths}⬆️</h2>
              </li>
            </ul>
            <h4>Last Updated :</h4>
            <h5>{Date}</h5>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card mb-4 rounded-3 shadow-sm bg-danger">
          <div className="card-header py-3">
            <h4 className="my-0 fw-normal">
              <strong>Total Death</strong>
            </h4>
          </div>
          <div className="card-body">
            <h1 className="card-title pricing-card-title">{TotalDeaths}</h1>
            <ul className="list-unstyled mt-3 mb-4">
              <li>
                <h2>{NewDeaths}⬆️</h2>
              </li>
            </ul>
            <h4>Last Updated :</h4>
            <h5>{Date}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalInfo;
