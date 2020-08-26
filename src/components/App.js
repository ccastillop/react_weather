import React from 'react'
import forecast from '../data'
import DayWeather from './DayWeather'

function App() {
  return (
    <div className="border border-gray m-4 p-4">
      <header>
        Wheather App
      </header>
      <div className="flex mb-4">
        {forecast.map( (day, index) => <DayWeather key={index} day={day} /> )}
      </div>
    </div>
  );
}

export default App;

/*
[ forecast:
  [ Days
    [ weekday
      image
      high, low
    ]...
  ]
]
*/