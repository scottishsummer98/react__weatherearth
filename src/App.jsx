import React from 'react'
import Search from './components/Search'
import CurrentWeather from './components/CurrentWeather'
import ForecastAccordion from './components/ForecastAccordion'

const App = () => {
  return (
    <div>
      <Search />
      <CurrentWeather />
      <ForecastAccordion />
    </div>
  )
}

export default App
