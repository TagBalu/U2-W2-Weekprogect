import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Mynavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg sticky-top bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          ☀️ Meteo for you
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Previsioni
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contatti
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Mynavbar;
