import React from 'react'
import {ReactComponent as Cloudy} from '../assets/svg/cloud.svg'
import {ReactComponent as Snowy} from '../assets/svg/cloud-snow.svg'
import {ReactComponent as Rainy} from '../assets/svg/cloud-rain.svg'
import {ReactComponent as Sunny} from '../assets/svg/sun.svg'

const Components = {
  cloudy: Cloudy,
  snowy: Snowy,
  rainy: Rainy,
  sunny: Sunny
};

function DayWeather(props) {
  const { name, weather, high, low } = props.day
  const Icon = Components[weather]

  return(
    <div className="mr-2">
      <h4 className="">
        {name}
      </h4>
      <Icon />
      <p className="">
        {high}, {low}
      </p>
    </div>
  )
}

export default DayWeather
