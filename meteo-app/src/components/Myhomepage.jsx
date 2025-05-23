import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Style/Homepage.css";

const Home = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!city) {
      setError("Inserisci il nome di una città.");
      return;
    }

    try {
      const apiKey = "328232eaef3e8de33d14ccb7d5d1bc88";

      const geoResponse = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`);

      if (!geoResponse.ok) {
        throw new Error("Errore nel recupero delle coordinate.");
      }

      const geoData = await geoResponse.json();

      if (geoData.length === 0) {
        throw new Error("Città non trovata.");
      }

      const { lat, lon } = geoData[0];

      const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=it`);

      if (!weatherResponse.ok) {
        throw new Error("Errore nel recupero del meteo.");
      }

      const weatherData = await weatherResponse.json();
      setWeather({ ...weatherData, lat, lon });

      const forecastResponse = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=it`);

      if (!forecastResponse.ok) {
        throw new Error("Errore nel recupero delle previsioni.");
      }

      const forecastData = await forecastResponse.json();

      const dailyForecast = forecastData.list.filter((item) => item.dt_txt.includes("12:00:00"));

      setForecast(dailyForecast);
      setError("");
    } catch (err) {
      setWeather(null);
      setForecast([]);
      setError(err.message);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">Benvenuti nella mia semplice App meteo</h1>
      <p className="text-center">Inserisci il nome della città per visualizzare le previsioni meteo</p>
      <form onSubmit={handleSubmit} className="d-flex flex-column align-items-center">
        <input type="text" className="form-control w-50 mb-3" placeholder="Inserisci il nome della città" value={city} onChange={handleInputChange} />
        <button type="submit" className="btn btn-danger">
          Cerca
        </button>
      </form>

      {error && <p className="text-danger text-center mt-3">{error}</p>}

      {weather && (
        <Link to={`/dettagli/${weather.lat}/${weather.lon}`} className="text-decoration-none">
          <div className="weather-card mx-auto mt-4">
            <div className="weather-card-header">
              <h2>
                {weather.name}, {weather.sys.country}
              </h2>
              <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`} alt={weather.weather[0].description} />
            </div>
            <div className="weather-card-body">
              <h3>{weather.main.temp}°C</h3>
              <p>{weather.weather[0].description}</p>
            </div>
          </div>
        </Link>
      )}

      {forecast.length > 0 && (
        <div className="forecast mt-5">
          <h2 className="text-center">Previsioni per i prossimi 5 giorni</h2>
          <div className="d-flex justify-content-center flex-wrap">
            {forecast.map((day, index) => (
              <div key={index} className="weather-card m-2">
                <div className="weather-card-header">
                  <h2>
                    {new Date(day.dt_txt).toLocaleDateString("it-IT", {
                      weekday: "long"
                    })}
                  </h2>
                  <img src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@4x.png`} alt={day.weather[0].description} />
                </div>
                <div className="weather-card-body">
                  <h3>{day.main.temp}°C</h3>
                  <p>{day.weather[0].description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
