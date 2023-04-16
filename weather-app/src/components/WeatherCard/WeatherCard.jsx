import React from 'react'
import './WeatherCard.scss'

const WeatherCard = (props) => {
  const {date, icon, maxTemp, minTemp, weeklyWeather, time} = props

  const getWeekday = (date) => {
    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayIndex = new Date(date).getDay();
    return weekdays[dayIndex];
  }

  return (
    <div className='weather-card'>
      {weeklyWeather ? <h4>{getWeekday(date).substring(0,3)}</h4> : <h4>{time}</h4>}
      <img className='weather-card__icon' src={icon} alt="" />
      <h4>{Math.round(maxTemp)}° {weeklyWeather &&<span>{Math.round(minTemp)}°</span>}</h4>
    </div>
  )
}

export default WeatherCard