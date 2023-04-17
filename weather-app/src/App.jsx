import './App.scss';
import { useState } from 'react';
import { useEffect } from 'react';
import WeatherWidget from './components/WeatherWidget/WeatherWidget';

const App = () => {
  const [weather, setWeather] = useState([])
  const [position, setPosition] = useState(['London'])


  const rootURL = "http://api.weatherapi.com/v1/forecast.json"

  const getWeather = async () => {
    const url = rootURL;
    //const res = await fetch(url + `?key=${process.env.REACT_APP_API_KEY}&q=London&days=7&aqi=no&alerts=no`)
    const res = await fetch(url + `?key=43ecf8b9cc5944259d9222011231404&q=${position}&days=7&aqi=no&alerts=no`)
    const data = await res.json();
    setWeather(data)
    console.log(position)
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


  return (
    <div className="App">
      Welcome Back
      {weather.current &&<img src={weather.current['condition'].icon} alt="" />}

      {weather.current && <WeatherWidget current = {weather.current} forecast = {weather.forecast} forecasts = {weather.forecast.forecastday} hourForecasts = {weather.forecast.forecastday[0].hour} handleLocation = {getLocation}/>}

    </div>
  );
}

export default App;
