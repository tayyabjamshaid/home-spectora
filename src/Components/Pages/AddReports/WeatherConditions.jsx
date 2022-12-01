import React from "react";
import "../../../Assets/css/WeatherConditions.css";

export default function WeatherConditions() {
  const [climate, setClimate] = React.useState("Clear & Dry");
  const [temperature, setTemperature] = React.useState("6");
  const [humidity, setHumidity] = React.useState("Select");

  const handleChange = (event, text) => {
    if (text == "climate") {
      setClimate(event.target.value);
    } else if (text == "temperature") {
      setTemperature(event.target.value);
    } else if (text == "humidity") {
      setHumidity(event.target.value);
    }
  };
  return (
    <div className="parentWeather">
      <div className="weatherPart1">
        <div className="handleFlex handleWeatherMargin">
          <span className="addReportLabelHeading">Climate</span>

          <select
            className="customSelect"
            value={climate}
            onChange={(e) => {
              handleChange(e, "climate");
            }}
          >
            <option value="Select" className="option">
              Clear & Dry
            </option>

            <option value="Two" className="option">
              Two
            </option>

            <option value="Three" className="option">
              Three
            </option>
          </select>
        </div>{" "}
        <div className="handleFlex handleWeatherMargin">
          <span className="addReportLabelHeading">Temperature</span>
          <select
            className="customSelect"
            value={temperature}
            onChange={(e) => {
              handleChange(e, "temperature");
            }}
          >
            <option value="6" className="option">
              6
            </option>

            <option value="7" className="option">
              7
            </option>

            <option value="8" className="option">
              8
            </option>
          </select>
        </div>{" "}
        <div className="temperatureDiv">
          <div className="round">
            <span>
              6 <span className="goTop">C</span>
            </span>
          </div>{" "}
          <span className="handlePaddingTemp">F</span>
        </div>
      </div>
      <div className="weatherPart2">
        <div className="handleFlex">
          <span className="addReportLabelHeading">Humidity</span>

          <select
            className="customSelect"
            value={humidity}
            onChange={(e) => {
              handleChange(e, "humidity");
            }}
          >
            <option value="Select" className="option">
              Select
            </option>

            <option value="Two" className="option">
              Two
            </option>

            <option value="Three" className="option">
              Three
            </option>
          </select>
        </div>{" "}
      </div>
    </div>
  );
}
