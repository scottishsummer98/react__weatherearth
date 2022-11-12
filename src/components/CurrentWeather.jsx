import React from 'react'
import moment from 'moment'
import './CurrentWeather.css'

function CurrentWeather({ data }) {
  return (
    <div className="container">
      <div className="top">
        <div className="topLeft">
          <div className="topLeftUp">
            <img
              alt="weather"
              className="topLeftUp_weatherIcon"
              src={`icons/${data.weather[0].icon}.png`}
            />
            <p className="topLeftUp_weatherDescription">
              {data.weather[0].description}
            </p>
          </div>
          <div className="topLeftDown">
            <p className="topLeftDown_weatherTemperature">
              {Math.round(data.main.temp)}°C
            </p>
          </div>
        </div>
        <div className="topRight">
          <div className="topRight_time">{moment().format('LT')}</div>
          <div className="topRight_date">
            {moment().format('MMMM Do, YYYY')}
          </div>
          <div className="topRight_city">{data.city}</div>
        </div>
      </div>
      <div className="bottom">
        <div className="details">
          <div className="bottomRow">
            <img
              alt="weather"
              className="bottomRow_weatherIcon"
              src={`icons/thermometer.png`}
            />
            <span className="bottomRow_value">
              {Math.round(data.main.feels_like)} °C
            </span>
            <img
              alt="weather"
              className="bottomRow_weatherIcon"
              src={`icons/wind.png`}
            />
            <span className="bottomRow_value">
              {Math.round(data.wind.speed)} m/s
            </span>
          </div>
          <div className="bottomRow">
            <img
              alt="weather"
              className="bottomRow_weatherIcon"
              src={`icons/humidity.png`}
            />
            <span className="bottomRow_value">
              {Math.round(data.main.humidity)} %
            </span>
            <img
              alt="weather"
              className="bottomRow_weatherIcon"
              style={{ width: '4rem' }}
              src={`icons/air.png`}
            />
            <span className="bottomRow_value">
              {Math.round(data.main.pressure)} hPa
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CurrentWeather
