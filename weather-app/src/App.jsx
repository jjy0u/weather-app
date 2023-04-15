import './App.scss';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const [weather, setWeather] = useState([])

  const getWeather = async () => {
    const url = "http://api.weatherapi.com/v1/forecast.json";
    const res = await fetch(url + "?key=43ecf8b9cc5944259d9222011231404&q=London&days=7&aqi=no&alerts=no")
    const data = await res.json();
    setWeather(data)
    console.log(data.current['condition'].icon)
  };

  useEffect(() => {
    getWeather()
  }, [])

  //console.log(weather.current)

  return (
    <div className="App">
      Welcome Back
      <img src={weather.current['condition'].icon} alt="" />
    </div>
  );
}

export default App;
