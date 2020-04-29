import React from 'react';

const CountryButton = ({country,handleClick}) => {
  return(
    <button onClick={handleClick} value={country.numericCode}>Show</button>
  )
}

export default CountryButton
