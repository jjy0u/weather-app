import React from 'react'
import WeatherCard from '../../components/WeatherCard/WeatherCard'
import './WeeklyWeather.scss'

const WeeklyWeather = (props) => {

    const {forecasts} = props

    const weeklyWeatherJSX = forecasts.slice(1).map((day) => {
        return ( 
        <WeatherCard
              date = {day.date}
              icon = {day.day.condition.icon}
              maxTemp = {day.day.maxtemp_c}
              minTemp = {day.day.mintemp_c}
              weeklyWeather = {true}
              key = {day.date_epoch}
              />
          )
      })
    
  return (
    <div className='weekly-forecast'>{weeklyWeatherJSX}</div>
  )
}

export default WeeklyWeather