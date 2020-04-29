import React from 'react'
import CountryDrilldown from './CountryDrilldown'
import CountryButton from './CountryButton'

const Countries = ({countries, weather, handleClick}) => {
  return(
    countries.length>10 ?<p>Too many returns, specify another filter</p>
      :(countries.length>1 ? countries.map((country,i) => <div key={country.numericCode}><p >{country.name}</p><CountryButton country={country} handleClick={handleClick}/></div>)
        :(countries.length===1 ? <CountryDrilldown country={countries[0]} weather={weather}/> : <p>No Matches</p>))
  )
}

export default Countries
