import React from "react";
import WeatherImg from "./WeatherImg";
import Forecast from "./Forecast";

export default function Result(props) {

  const nextFiveDays = [];

  const todayData = props.resData.data.list[0];

  let initialValue;

  props.resData.data.list.forEach((x, i) => {
    if(i === 0) {nextFiveDays.push(x)}
    else if (i !== 0) {
      if (initialValue.dt_txt.slice(0, 11) !== x.dt_txt.slice(0, 11)) {
        nextFiveDays.push(x);
      }
    }
    initialValue = x;
  });

  return (
    <div className="result">
      <div className="wrapper">
        <div className="result-heading">
          <p className="result-day">Today</p>
          <span className="result-city">{props.resData.data.city.name}</span>
        </div>

        <div className="weather-info">
          <div className="weather-info-today">
            <div className="result-img">
              <WeatherImg
                img={todayData.weather[0].main}
                name={todayData.weather[0].main}
              />
              <h3 className="result-img-title">{todayData.weather[0].main}</h3>
              <span className="result-img-info">
                {todayData.weather[0].description}
              </span>
            </div>
            <ul className="result-condition">
              <li className="result-condition-item">
                <p className="result-condition-item-title">Temp</p>
                <span className="result-condition-item-value">
                  {todayData.main.temp}&#8451;
                </span>
              </li>
              <li className="result-condition-item">
                <p className="result-condition-item-title">Feels Like</p>
                <span className="result-condition-item-value">
                  {todayData.main.feels_like}&#8451;
                </span>
              </li>
              <li className="result-condition-item">
                <p className="result-condition-item-title">Humidity</p>
                <span className="result-condition-item-value">
                  {todayData.main.humidity}%rh
                </span>
              </li>
            </ul>
          </div>
          <div className="weather-forecast">
          <h2 className="weather-forecast-title">Next 5 Days</h2>
            <ul className="weather-forecast-list">
              {nextFiveDays.map((x, i) => (
                <Forecast data={x} key={i} />
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
