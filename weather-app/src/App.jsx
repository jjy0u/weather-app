import './App.scss';
import { useState } from 'react';
import { useEffect } from 'react';
import WeatherWidget from './components/WeatherWidget/WeatherWidget';

const App = () => {
  const [weather, setWeather] = useState([])

  const rootURL = "http://api.weatherapi.com/v1/forecast.json"

  const getWeather = async () => {
    const url = rootURL;
    //const res = await fetch(url + `?key=${process.env.REACT_APP_API_KEY}&q=London&days=7&aqi=no&alerts=no`)
    const res = await fetch(url + `?key=43ecf8b9cc5944259d9222011231404&q=London&days=7&aqi=no&alerts=no`)
    const data = await res.json();
    setWeather(data)
  };

  useEffect(() => {
    getWeather()
  }, [])

  console.log(weather)

  return (
    <div className="App">
      Welcome Back
      {weather.current &&<img src={weather.current['condition'].icon} alt="" />}

      {weather.current && <WeatherWidget current = {weather.current} forecast = {weather.forecast}/>}
    </div>
  );
}

export default App;
