import React from "react";

export default function Forecast(props) {
  const x = props.data
  return (
    <li className="weather-forecast-day">
      <p className="weather-forecast-date">{x.dt_txt.slice(0, 11)}</p>
      <span className="weather-forecast-value">{x.main.temp}&#8451;</span>
    </li>
  );
}
