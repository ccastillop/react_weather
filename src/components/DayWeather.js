import React from 'react'

function Icon(props){
  const {code, alt} = props
  const url = `https://openweathermap.org/img/wn/${code}@2x.png`
  return(
    <img src={url} alt={alt} />
  )
}

function DayWeather(props) {
  const { dt, main, weather } = props.weather
  const {icon, description} = weather[0]
  const {temp_max, temp_min} = main
  const day = new Date(dt * 1000)
  console.log(main)
  return(
    <div className="text-center mr-2 mb-4 border p-2">
      <h4 className="font-bold">
        {day.toLocaleString("es", { weekday:"short" })}
        {day.toLocaleString("es", { timeStyle: "short" })}
      </h4>
      <Icon code={icon} alt={description} />
      <p>
        {temp_min}ºC, {temp_max}ºC
      </p>
    </div>
  )
}

export default DayWeather
