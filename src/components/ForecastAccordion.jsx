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
              <div className="container_forecast">
                <div className="top">
                  <div className="topLeft">
                    <div className="topLeftUp">
                      <img
                        alt="weather"
                        className="topLeftUp_weatherIcon"
                        src={`icons/${item.weather[0].icon}.png`}
                      />
                      <p className="topLeftUp_weatherDescription">
                        {item.weather[0].description}
                      </p>
                    </div>
                    <div className="topLeftDown">
                      <p className="topLeftDown_weatherTemperature">
                        {Math.round(item.main.temp_max)}°C /{' '}
                        {Math.round(item.main.temp_min)}°C
                      </p>
                    </div>
                  </div>
                  <div className="topRight">
                    <div className="topRight_time">
                      {moment(item.dt_txt).format('dddd')}
                    </div>
                    <div className="topRight_date">
                      {moment(item.dt_txt).format('MMMM Do, YYYY')}
                    </div>
                    <div className="topRight_city">
                      {moment(item.dt_txt).format('LT')}
                    </div>
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
                        {item.main.feels_like} °C
                      </span>
                      <img
                        alt="weather"
                        className="bottomRow_weatherIcon"
                        src={`icons/wind.png`}
                      />
                      <span className="bottomRow_value">
                        {item.wind.speed} m/s
                      </span>
                    </div>
                    <div className="bottomRow">
                      <img
                        alt="weather"
                        className="bottomRow_weatherIcon"
                        src={`icons/humidity.png`}
                      />
                      <span className="bottomRow_value">
                        {item.main.humidity} %
                      </span>
                      <img
                        alt="weather"
                        className="bottomRow_weatherIcon"
                        style={{ width: '4rem' }}
                        src={`icons/air.png`}
                      />
                      <span className="bottomRow_value">
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
