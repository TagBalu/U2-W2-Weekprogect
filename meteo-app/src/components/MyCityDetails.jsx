import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../Style/detagli.css";

const CityDetails = () => {
  const { lat, lon } = useParams();
  const [details, setDetails] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCityDetails = async () => {
      try {
        const apiKey = "328232eaef3e8de33d14ccb7d5d1bc88";
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=it`);

        if (!response.ok) {
          throw new Error("Errore nel recupero dei dettagli della città.");
        }

        const data = await response.json();
        setDetails(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchCityDetails();
  }, [lat, lon]);

  return (
    <div className="container mt-5 p-0">
      {error && <p className="text-danger text-center">{error}</p>}

      {details && (
        <div className="city-details">
          <div className="city-header">
            <h1 className="city-name">
              {details.name}, {details.sys.country}
            </h1>
            <h2 className="temperature">{details.main.temp}°C</h2>
            <p className="description">{details.weather[0].description}</p>
          </div>

          <div className="details-grid">
            <div className="detail-card">
              <p>💧 Umidità</p>
              <h3>{details.main.humidity}%</h3>
            </div>
            <div className="detail-card">
              <p>🌬️ Vento</p>
              <h3>{details.wind.speed} m/s</h3>
            </div>
            <div className="detail-card">
              <p>🌅 Alba</p>
              <h3>{new Date(details.sys.sunrise * 1000).toLocaleTimeString()}</h3>
            </div>
            <div className="detail-card">
              <p>🌇 Tramonto</p>
              <h3>{new Date(details.sys.sunset * 1000).toLocaleTimeString()}</h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CityDetails;
