import React from 'react'
import clouds from '../conditions/cloudy.png'
import rainy from '../conditions/rainy.png'
import sunny from '../conditions/sunny.png'
import clear from '../conditions/clear.png'
import mist from  '../conditions/mist.png'
import smoke from '../conditions/smoke.png'
import drizzle from '../conditions/drizzle.png'

export default function WeatherImg(props) {
  
  let img;

  if(props.img === 'Clouds') img = clouds
  else if(props.img === 'Rain') img = rainy
  else if(props.img === 'Sunny') img = sunny
  else if(props.img === 'Clear') img = clear
  else if(props.img === 'Mist') img = mist
  else if(props.img === 'Smoke') img = smoke
  else if(props.img === 'drizzle') img = drizzle
  else img = clear

  return (
    <div>
       <figure className="result-img-figure">
          <img src={img} alt={props.name} />
      </figure>
    </div>
  )
}
