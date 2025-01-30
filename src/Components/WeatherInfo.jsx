import React from "react";
import {
  FaSun,
  FaCloudSun,
  FaCloudRain,
  FaSnowflake,
  FaCloud,
} from "react-icons/fa";

const WeatherInfo = React.memo(({ weather }) => {
  if (!weather) return null;

  const condition = weather.current?.condition?.text?.toLowerCase() || "";
  let weatherIcon;

  switch (condition) {
    case "sunny":
      weatherIcon = <FaSun size={35} color="#FF9900" />;
      break;
    case "partly cloudy":
      weatherIcon = <FaCloudSun size={35} color="#FFCC00" />;
      break;
    case "rainy":
      weatherIcon = <FaCloudRain size={35} color="#1E90FF" />;
      break;
    case "snowy":
      weatherIcon = <FaSnowflake size={35} color="#00BFFF" />;
      break;
    default:
      weatherIcon = <FaCloud size={35} color="#B0C4DE" />;
      break;
  }

  return (
    <div>
      <h2 className="text-2xl font-bold text-center">
        {weather.location.name}
      </h2>
      <p className="text-center text-gray-700">
        {weather.location.region}, {weather.location.country}
      </p>

      <div className="text-center mt-4 flex justify-center items-center gap-x-5">
        {weatherIcon}
        <p className="text-xl font-semibold">{weather.current?.temp_c}°C</p>
        <p>{weather.current?.condition?.text}</p>
      </div>
    </div>
  );
});

export default WeatherInfo;
