import React from 'react';
import Weather from './Weather';

const CountryDrilldown = ({country,weather}) => {
  console.log('drilldown',weather)
  return(
    <div>
      <h2>{country.name}</h2>
      <p>Capital: {country.capital}</p>
      <p>Population: {country.population}</p>
      <h3>Languages</h3>
      <ul>{country.languages.map(language => <li key={language.iso639_1}> {language.name}</li>)}</ul>
      <img src={country.flag} alt="Country Flag" height="42" width="42"></img>
      <Weather country={country} weather={weather} />
    </div>
  )
}

export default CountryDrilldown
