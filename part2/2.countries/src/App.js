import React, { useState, useEffect} from 'react';
import axios from 'axios'
import Filter from './components/Filter'
import Countries from './components/Countries'


const App = () => {
  const [ countries, setCountries ] = useState([])
  const [ searchText, setSearchText ] = useState('')
  const [ countriesToShow, setCountriesToShow ] = useState([])
  const [ isQueryWeather, setIsQueryWeather ] = useState(true)
  const [ weather, setWeather ] = useState([])
  const weatherUrl = 'http://api.weatherstack.com//current'
  const weatherQueryUrl = weatherUrl.concat('?access_key='+process.env.REACT_APP_API_KEY,'&query=')

  const handleSearchText = async (event) => {
    setSearchText(event.target.value)
    if(searchText.trim() === null || searchText.trim() === ''){
      setCountriesToShow([])
    }
    setCountriesToShow(countries.filter(c => c.name.toUpperCase().includes(searchText.toUpperCase())))
    if(countriesToShow.length === 1){
      setIsQueryWeather(!isQueryWeather)
    }
  }

  const handleCountryButton = (event) => {
    event.preventDefault()
    const selectedCountry = countriesToShow.filter(c => c.numericCode === event.target.value)
    setCountriesToShow(selectedCountry)
    setIsQueryWeather(!isQueryWeather)
  }
  {/*we are hitting this api way too much reason for the isQueryWeather... flag doesn't actually matter on state change will hook though*/}
  useEffect(() => {
    console.log(weatherQueryUrl.concat(countriesToShow.length === 1 ? countriesToShow[0].capital : "New York"))
    axios
      .get(weatherQueryUrl.concat(countriesToShow.length === 1 ? countriesToShow[0].capital : "New York").trim())
      .then(response => {
        const newWeather = response.data
        setWeather(newWeather)
      })
  }, [isQueryWeather])

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  },[])

  return (
    <div className="App">
      <Filter searchText={searchText} handleSearchText={handleSearchText}/>
      <Countries countries={countriesToShow} weather={weather} handleClick={handleCountryButton}/>
    </div>
  )
}

export default App;
