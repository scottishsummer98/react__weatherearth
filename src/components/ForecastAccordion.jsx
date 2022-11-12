import React from 'react'
import moment from 'moment'
import './ForecastAccordion.css'
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import { Autoplay } from 'swiper'

function ForecastAccordion({ data }) {
  return (
    <>
      <label className="title">Upcoming Forecast</label>
      <div>
        <Swiper
          className="mySwiper"
          slidesPerView={4}
          spaceBetween={40}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
        >
          {data.list.map((item, idx) => (
            <SwiperSlide>
              <div className="forecast_container_body">
                <p className="city">{moment(item.dt_txt).format('dddd')}</p>
                <p className="city">
                  {moment(item.dt_txt).format('MMMM Do YYYY')}
                </p>
                <p className="city">{moment(item.dt_txt).format('LT')}</p>
                <div className="top">
                  <div>
                    <p className="temperature">
                      {Math.round(item.main.temp_max)}°C /{' '}
                      {Math.round(item.main.temp_min)}°C
                    </p>
                    <p className="weather-description">
                      {item.weather[0].description}
                    </p>
                  </div>
                  <img
                    alt="weather"
                    className="weather-icon"
                    src={`icons/${item.weather[0].icon}.png`}
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
                        {item.main.feels_like} °C
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
                        {item.wind.speed} m/s
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
                        {item.main.humidity} %
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
                        {item.main.pressure} hPa
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  )
}

export default ForecastAccordion
