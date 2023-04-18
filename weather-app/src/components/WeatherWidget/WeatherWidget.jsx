import React from 'react'
import './WeatherWidget.scss'
import SearchFilter from '../SearchFilter/SearchFilter'
import WeeklyWeather from '../../containers/WeeklyWeather/WeeklyWeather'
import HourlyWeather from '../../containers/HourlyWeather/HourlyWeather'
import rainLogo from "../../assets/images/rain.png"
import locationPin from "../../assets/images/pin.png"


const WeatherWidget = (props) => {

  const {current, forecast, forecasts, hourForecasts, handleLocation, handleInput, handleSearchTerm, location} = props

  const getWeekday = (date) => {
    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayIndex = new Date(date).getDay();
    return weekdays[dayIndex];
  }


  return (
    <div className='weather-widget'>
        <div className='weather-widget__today'>
          <div className='weather-widget__location'>
            <SearchFilter handleInput = {handleInput} handleSearchTerm={handleSearchTerm}/>
            <button className='weather-widget__location-button' onClick={handleLocation}><img className='weather-widget__location-icon' src="https://img.icons8.com/material-outlined/24/null/center-direction.png" alt="o"/></button>
          </div>
          <div className='weather-widget__icon-container'>
          {current && <img className='weather-widget__main-icon' src={current.condition.icon} alt="" />}
          </div>
          <h1 className='weather-widget__temp'>{current.temp_c}<sup>°C</sup></h1>
          <h2 className='weather-widget__date'>{getWeekday(current.last_updated.split(" ")[0])}, <span className='weather-widget__time'>{current.last_updated.split(" ")[1]}</span></h2> 
          <hr class="solid"/>
          <h3 className='weather-widget__description'><img className='weather-widget__small-icon' src={forecast.forecastday[0].day.condition.icon} alt="" />{forecast.forecastday[0].day.condition.text}</h3>
          <h3 className='weather-widget__rain-chance'><img className='weather-widget__rain-icon' src={rainLogo}></img> Rain - {forecast.forecastday[0].day.daily_chance_of_rain}%</h3>

          <h3 className='weather-widget__pinpoint-location'><img className='weather-widget__pin-icon' src={locationPin}></img> {location.name}, {location.country}</h3>
        </div>

        <div className='weather-widget__further-info'>
          <WeeklyWeather forecasts = {forecasts}/>
          {/* <HourlyWeather hourForecasts = {hourForecasts}/> */}

          <h3 className='weather-widget__current-highlights'>Current Highlights</h3>
          <div className='weather-widget__now-info'>
            <div className='weather-widget__info-card'>
              <h5 className='weather-widget__info-title'>Feels Like</h5>
              <h2 className='weather-widget__info-value'>{current.feelslike_c}°</h2>
            </div>

            <div className='weather-widget__info-card'>
              <h5 className='weather-widget__info-title'>UV Index</h5>
              <h2 className='weather-widget__info-value'>{current.uv}</h2>
            </div>

            <div className='weather-widget__info-card'>
              <h5 className='weather-widget__info-title'>Sunrise & Sunset</h5>
              <h2 className='weather-widget__info-value'>{forecast.forecastday[0].astro.sunrise}</h2>
              <h2 className='weather-widget__info-value'>{forecast.forecastday[0].astro.sunset}</h2>
            </div>

            <div className='weather-widget__info-card'>
              <h5 className='weather-widget__info-title'>Wind</h5>
              <h2 className='weather-widget__info-value'>{current.wind_kph} km/h</h2>
              <h2 className='weather-widget__info-value'>{current.wind_dir}</h2>
            </div>

            <div className='weather-widget__info-card'>
              <h5 className='weather-widget__info-title'>Humidity</h5>
              <h2 className='weather-widget__info-value'>{current.humidity} %</h2>
            </div>

            <div className='weather-widget__info-card'>
              <h5 className='weather-widget__info-title'>Visibility</h5>
              <h2 className='weather-widget__info-value'>{current.vis_km} km</h2>
            </div>

          </div>
          
        </div>
    </div>
  )
}

export default WeatherWidget