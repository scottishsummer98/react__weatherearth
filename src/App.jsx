import React, { useState } from 'react'
import Search from './components/Search'
import CurrentWeather from './components/CurrentWeather'
import ForecastAccordion from './components/ForecastAccordion'

const App = () => {
  const [currentWeather, setCurrentWeather] = useState(null)
  const [forecast, setForecast] = useState(null)
  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(' ')

    const currentWeatherFetch = fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=72aba88f1e3fe117f5b58b25269aa3ec&units=metric`,
    )
    const forecastFetch = fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=72aba88f1e3fe117f5b58b25269aa3ec&units=metric`,
    )

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json()
        const forcastResponse = await response[1].json()

        setCurrentWeather({ city: searchData.label, ...weatherResponse })
        setForecast({ city: searchData.label, ...forcastResponse })
      })
      .catch(console.log)
  }
  return (
    <div>
      <div className="search_container">
        <Search onSearchChange={handleOnSearchChange} />
      </div>
      <div className="currentweather_container">
        {currentWeather && <CurrentWeather data={currentWeather} />}
      </div>
      <div className="forecastaccordion_container">
        {forecast && <ForecastAccordion data={forecast} />}
      </div>
    </div>
  )
}

export default App
