import React from 'react';

const Weather = ({country, weather}) => {
  console.log('weather component',weather)
  const current = weather.current

  return(
    <>
    <h2>Weather in {country.capital}</h2>
    <p><strong>Temperature:</strong> {current.temperature} Celcius </p>
    <img src={current.weather_icons[0]} alt="weather icon" width="42" height="42"></img>
    <p><strong>Wind:</strong> {current.wind_speed} direction {current.wind_dir}</p>
    </>
  )
}

export default Weather
