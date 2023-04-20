import React from 'react'
import './WeatherWidget.scss'
import RadioButtons from '../RadioButtons/RadioButtons'
import SearchFilter from '../SearchFilter/SearchFilter'
import WeeklyWeather from '../../containers/WeeklyWeather/WeeklyWeather'
import HourlyWeather from '../../containers/HourlyWeather/HourlyWeather'
import rainLogo from "../../assets/images/rain.png"
import locationPin from "../../assets/images/pin.png"
import compass from "../../assets/images/compass.png"
import humidity from "../../assets/images/humidity.png"
import visibility from "../../assets/images/visibility.png"
import sunset from "../../assets/images/sunset.png"
import sunrise from "../../assets/images/sunrise.png"
import UV from "../../assets/images/uv.png"
import wind from "../../assets/images/wind.png"
import thermometer from "../../assets/images/thermometer.png"
import { useState } from 'react'


const WeatherWidget = (props) => {

  const {current, forecast, forecasts, hourForecasts, handleLocation, handleInput, handleSearchTerm, location} = props

  const [isToday, setIsToday] = useState(false);


  const getWeekday = (date) => {
    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayIndex = new Date(date).getDay();
    return weekdays[dayIndex];
  }

  const handleCheck = (event) => {
     if(event.target.value == 'Today'){
      setIsToday(true)
     } else{
      setIsToday(false)
     }
  }

  console.log(isToday)

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
          <RadioButtons handleCheck= {handleCheck} />
          {!isToday && <WeeklyWeather forecasts = {forecasts}/>}
          {isToday&& <HourlyWeather hourForecasts = {hourForecasts}/>}

          <h3 className='weather-widget__current-highlights'>Current Highlights</h3>
          <div className='weather-widget__now-info'>
            <div className='weather-widget__info-card'>
              <h5 className='weather-widget__info-title'>Feels Like</h5>
              <h2 className='weather-widget__info-value'><img className='weather-widget__highlight-icon' src={thermometer} alt="" />{Math.round(current.feelslike_c)}°</h2>
            </div>

            <div className='weather-widget__info-card'>
              <h5 className='weather-widget__info-title'>UV Index</h5>
              <h2 className='weather-widget__info-value'><img className='weather-widget__highlight-icon' src={UV} alt="" />{current.uv}</h2>
            </div>

            <div className='weather-widget__info-card'>
              <h5 className='weather-widget__info-title'>Sunrise & Sunset</h5>
              <h2 className='weather-widget__info-value weather-widget__suns'><img className='weather-widget__highlight-icon' src={sunrise} alt="" />{forecast.forecastday[0].astro.sunrise}</h2>
              <h2 className='weather-widget__info-value weather-widget__suns'><img className='weather-widget__highlight-icon' src={sunset} alt="" />{forecast.forecastday[0].astro.sunset}</h2>
            </div>

            <div className='weather-widget__info-card'>
              <h5 className='weather-widget__info-title'>Wind</h5>
              <h2 className='weather-widget__info-value'><img className='weather-widget__highlight-icon' src={wind} alt="" />{Math.round(current.wind_kph)}<span className='weather-widget__unit'>km/h</span></h2>
              <h2 className='weather-widget__wind-dir'><img className='weather-widget__highlight-icon' src={compass} alt="" />{current.wind_dir}</h2>
            </div>

            <div className='weather-widget__info-card'>
              <h5 className='weather-widget__info-title'>Humidity</h5>
              <h2 className='weather-widget__info-value'><img className='weather-widget__highlight-icon' src={humidity} alt="" />{current.humidity}<span className='weather-widget__unit'>%</span></h2>
            </div>

            <div className='weather-widget__info-card'>
              <h5 className='weather-widget__info-title'>Visibility</h5>
              <h2 className='weather-widget__info-value'><img className='weather-widget__highlight-icon' src={visibility} alt="" />{current.vis_km}<span className='weather-widget__unit'>km</span></h2>
            </div>

          </div>
          
        </div>
    </div>
  )
}

export default WeatherWidget