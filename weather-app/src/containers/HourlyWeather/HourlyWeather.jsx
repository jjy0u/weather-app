import React from 'react'
import WeatherCard from '../../components/WeatherCard/WeatherCard'
import './HourlyWeather.scss'

    const HourlyWeather = (props) => {

        const {hourForecasts} = props
    
        const hourlyWeatherJSX = hourForecasts.map((hour) => {
            return ( 
            <WeatherCard
                  time = {hour.time.split(" ")[1]}
                  icon = {hour.condition.icon}
                  maxTemp = {hour.temp_c}
                  weeklyWeather = {false}
                  />
              )
          })
        
      return (
        <div className='hour-forecast'>{hourlyWeatherJSX}</div>
      )
}

export default HourlyWeather