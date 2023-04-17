import './App.scss';
import { useState } from 'react';
import { useEffect } from 'react';
import WeatherWidget from './components/WeatherWidget/WeatherWidget';
import { set } from 'immutable';

const App = () => {
  const [weather, setWeather] = useState([])
  const [position, setPosition] = useState(['London'])
  const [searchTerm, setSearchTerm] = useState([''])
  const [isError, setIsError] = useState(false);

  const rootURL = "http://api.weatherapi.com/v1/forecast.json"

  const getWeather = async () => {
    const url = rootURL;
    //const res = await fetch(url + `?key=${process.env.REACT_APP_API_KEY}&q=${position}&days=7&aqi=no&alerts=no`)
    const res = await fetch(url + `?key=43ecf8b9cc5944259d9222011231404&q=${position}&days=7&aqi=no&alerts=no`)
    if (!res.ok) {
      throw new Error('Invalid location entered');
    }
    const data = await res.json();
    setWeather(data)
    console.log(res)
  };


  useEffect(() => {
    getWeather()
  }, [position])

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

  const showPosition = position => {
    const { latitude, longitude } = position.coords;
    setPosition(`${latitude},${longitude}`)
  }

  const handleInput = async (event) => {
    event.preventDefault()
    setIsError(false);
    try {
      await getWeather();
    } catch (error) {
      setIsError(true)
      if(isError){
        window.alert(error.message);
      }

    }
    setPosition(searchTerm)
  }

  const handleSearchTerm = (event) => {
    setSearchTerm(event.target.value)
  }

  


  return (
    <div className="App">
      Welcome Back
      {weather.current &&<img src={weather.current['condition'].icon} alt="" />}

      {weather.current && <WeatherWidget current = {weather.current} forecast = {weather.forecast} forecasts = {weather.forecast.forecastday} hourForecasts = {weather.forecast.forecastday[0].hour} handleLocation = {getLocation} handleInput = {handleInput} handleSearchTerm={handleSearchTerm}/>}

    </div>
  );
}

export default App;
