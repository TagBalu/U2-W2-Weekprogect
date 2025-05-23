import React from "react";
import "../Style/footer.css";

const Myfooter = () => {
  return (
    <footer className="text-center mt-5">
      <div className="container p-4">
        <div className="row">
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase text-start text-white">Previsioni per le Regioni</h5>
            <div className="row">
              <div className="col-6">
                <ul className="list-unstyled mb-0 text-start">
                  <li>
                    <a href="#!" className="text-white">
                      Lombardia
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Lazio
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Sicilia
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Toscana
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-6">
                <ul className="list-unstyled mb-0 text-start">
                  <li>
                    <a href="#!" className="text-white">
                      Veneto
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Piemonte
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Campania
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Puglia
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase text-start text-white">Previsioni per le Città Italiane</h5>
            <div className="row">
              <div className="col-6">
                <ul className="list-unstyled mb-0 text-start">
                  <li>
                    <a href="#!" className="text-white">
                      Milano
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Roma
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Palermo
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Firenze
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-6">
                <ul className="list-unstyled mb-0 text-start">
                  <li>
                    <a href="#!" className="text-white">
                      Napoli
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Torino
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Venezia
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Bari
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center p-3">
        <p className="mb-0">☁️ MeteoApp © {new Date().getFullYear()}</p>
        <p className="mb-0">Tutti i diritti riservati</p>
      </div>
    </footer>
  );
};

export default Myfooter;
