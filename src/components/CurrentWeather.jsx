import React from 'react'
import './CurrentWeather.css'

function CurrentWeather({ data }) {
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">{data.city}</p>
          <p className="temperature">{Math.round(data.main.temp)}°C</p>
          <p className="weather-description">{data.weather[0].description}</p>
        </div>
        <img
          alt="weather"
          className="weather-icon"
          src={`icons/${data.weather[0].icon}.png`}
        />
      </div>
      <div className="bottom">
        <div className="details">
          <div className="parameter-row">
            {/* <h5>
              <b>Feels Like</b>
            </h5> */}
            <img
              alt="weather"
              className="weather-details-icon"
              src={`icons/thermometer.png`}
            />
            <span className="parameter-value">
              {Math.round(data.main.feels_like)} °C
            </span>
            {/* <h5>
              <b>Wind</b>
            </h5> */}
            <img
              alt="weather"
              className="weather-details-icon"
              src={`icons/wind.png`}
            />
            <span className="parameter-value">
              {Math.round(data.wind.speed)} m/s
            </span>
          </div>
          <div className="parameter-row">
            {/* <h5>
              <b>Humidity</b>
            </h5> */}
            <img
              alt="weather"
              className="weather-details-icon"
              src={`icons/humidity.png`}
            />
            <span className="parameter-value">
              {Math.round(data.main.humidity)} %
            </span>
            {/* <h5>
              <b>Pressure</b>
            </h5> */}
            <img
              alt="weather"
              className="weather-details-icon"
              src={`icons/air.png`}
            />
            <span className="parameter-value">
              {Math.round(data.main.pressure)} hPa
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CurrentWeather
