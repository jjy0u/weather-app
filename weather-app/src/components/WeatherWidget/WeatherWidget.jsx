import React from 'react'
import './WeatherWidget.scss'
import SearchFilter from '../SearchFilter/SearchFilter'

const WeatherWidget = (props) => {

  const {current} = props

  const handleLocation = () => {

  }

  return (
    <div className='weather-widget'>
        <div className='weather-widget__current'>
          <div className='weather-widget__location'>
            <SearchFilter/>
            <button onClick={handleLocation}><img src="" alt="o"/></button>
          </div>
          {current &&<img src={current['condition'].icon} alt="" />}
        </div>

        <div className='weather-widget__further-info'>
        </div>
    </div>
  )
}

export default WeatherWidget