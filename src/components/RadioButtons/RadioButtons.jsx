import React from 'react'
import './RadioButtons.scss'

const RadioButtons = (props) => {

    const {handleCheck} = props

  return (
    <div className='radio-buttons'>
        <div>
            <label>Today</label>
            <input type="radio" value="Today" name="forecast-option" onChange={handleCheck}/>
        </div>
        <div>
            <label>Week</label>
            <input type="radio" value="Week" name="forecast-option" onChange={handleCheck}/>
        </div>
    </div>
  )
}

export default RadioButtons