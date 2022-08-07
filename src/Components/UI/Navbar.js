import React from "react";
import { countryActions } from "../../Store/store";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const dispatch = useDispatch();

  const changeHandler = (e) => {
    dispatch(countryActions.searchCountry(e.target.value));
    dispatch(countryActions.Searching(true));
  };

  const clickHandler = (e) => {};

  return (
    <div>
      <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <span>Covid</span>
            <span>Tracker</span>
          </Link>
          <span className="badge rounded-pill bg-danger">LIVE</span>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link " aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/india" className="nav-link ">
                  Cases In India
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/world" className="nav-link">
                  Cases across World
                </Link>
              </li>
            </ul>

            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={changeHandler}
              />
              <button
                className="btn btn-outline-success"
                type="submit"
                onClick={clickHandler}
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
