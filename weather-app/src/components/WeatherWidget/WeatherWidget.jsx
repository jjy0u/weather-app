import React from 'react'
import './WeatherWidget.scss'
import SearchFilter from '../SearchFilter/SearchFilter'
import WeeklyWeather from '../../containers/WeeklyWeather/WeeklyWeather'
import HourlyWeather from '../../containers/HourlyWeather/HourlyWeather'

const WeatherWidget = (props) => {

  const {current, forecast, forecasts, hourForecasts} = props

  const getWeekday = (date) => {
    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayIndex = new Date(date).getDay();
    return weekdays[dayIndex];
  }

  const handleLocation = () => {

  }

  return (
    <div className='weather-widget'>
        <div className='weather-widget__today'>
          <div className='weather-widget__location'>
            <SearchFilter/>
            <button onClick={handleLocation}><img src="" alt="o"/></button>
          </div>
          {current &&<img src={current.condition.icon} alt="" />}
          <h1>{current.temp_c}<sup>°C</sup></h1>
          <h2>{getWeekday(current.last_updated.split(" ")[0])}, {current.last_updated.split(" ")[1]}</h2> 
          <h3><img src={forecast.forecastday[0].day.condition.icon} alt="" />{forecast.forecastday[0].day.condition.text}</h3>
          <h3>Rain - {forecast.forecastday[0].day.daily_chance_of_rain}%</h3>
        </div>

        <div className='weather-widget__further-info'>
          <WeeklyWeather forecasts = {forecasts}/>
          <HourlyWeather hourForecasts = {hourForecasts}/>

          
        </div>
    </div>
  )
}

export default WeatherWidget