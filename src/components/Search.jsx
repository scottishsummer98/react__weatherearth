import React, { useState } from 'react'
import { AsyncPaginate } from 'react-select-async-paginate'

function Search({ onSearchChange }) {
  const [search, setSearch] = useState(null)
  const loadOptions = (inputValue) => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '85120ebd3amsh1fe76304d59ec78p121ffcjsna299c0e3c6a1',
        'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
      },
    }

    return fetch(
      `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?minPopulation=1000000&namePrefix=${inputValue}`,
      options,
    )
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name}, ${city.countryCode}`,
            }
          }),
        }
      })
      .catch((err) => console.error(err))
  }
  const handleOnChange = (searchData) => {
    setSearch(searchData)
    onSearchChange(searchData)
  }
  return (
    <AsyncPaginate
      placeholder="Search City"
      debounceTimeout={600}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
    />
  )
}

export default Search
