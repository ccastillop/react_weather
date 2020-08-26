import React, { Component } from 'react'
import DayWeather from './DayWeather'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      data: {}
    }
    this.weatherUrl = "https://api.openweathermap.org/data/2.5/forecast?id=3936456&appid=e8009a780395b8de3a5d94aee1ffaba9&units=metric&lang=es"
  }

  componentDidMount() {
    fetch(this.weatherUrl)
      .then(response => response.json())
      .then(data => {
        this.setState({
          data: data,
          isLoading: false
        })
      })
  }

  getWeatherDays= () => {
    if(this.state.isLoading) return []
    const {list} = this.state.data
    return list
  }

  render() {

    const weathers = this.getWeatherDays()

    return (
      <div className="border border-gray m-4 p-4">
      <header className="font-bold text-xl text-center mb-4">
        Pronóstico de clima en Lima
      </header>
      {this.state.isLoading && <p className="text-center">Cargando...</p> }
      {!this.state.isLoading &&
        <div className="flex flex-wrap justify-between mb-4">
          {weathers.map( (weather, index) => <DayWeather key={index} weather={weather} /> )}
        </div>

      }
    </div>
    );
  }
}

export default App;
