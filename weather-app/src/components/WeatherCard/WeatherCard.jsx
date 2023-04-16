import React from 'react'
import './WeatherCard.scss'

const WeatherCard = (props) => {
  const {} = props

  const getWeekday = (date) => {
    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayIndex = new Date(date).getDay();
    return weekdays[dayIndex];
  }

  return (
    <div>
      <h3>{getWeekday(forecast.forecastday[0].date)}</h3>

    </div>
  )
}

export default WeatherCard