import React from 'react'
import './ForecastAccordion.css'
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import { Autoplay } from 'swiper'
const WEEK_DAYS = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
]

function ForecastAccordion({ data }) {
  const dayInAWeek = new Date().getDay()
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek),
  )
  return (
    <>
      <label className="title">Upcoming Forecast</label>
      <div>
        <Swiper
          className="mySwiper"
          slidesPerView={4}
          spaceBetween={40}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
        >
          {data.list.slice(0, 7).map((item, idx) => (
            <SwiperSlide>
              <div className="forecast_container_body">
                <div className="top">
                  <div>
                    <p className="city">
                      {forecastDays[idx]} {item.dt_txt}
                    </p>
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
