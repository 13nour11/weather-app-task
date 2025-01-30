import React, { useState, useEffect, useCallback } from "react";
import WeatherInfo from "./WeatherInfo";
import Spinner from "./Spinner";
import ErrorMsg from "./ErrorMsg";
import SearchInput from "./SearchInput";
import axios from "axios";
import { TiWeatherCloudy } from "react-icons/ti";

// Your API Key from WeatherAPI
const API_KEY = "6d2df67b9bef400884e174824240104";

const WeatherApp = () => {
  const [location, setLocation] = useState("Cairo");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchWeather = useCallback(async () => {
    if (!location.trim()) {
      setError("Please enter a location.");
      setWeather(null);
      return;
    }

    setLoading(true);
    setError("");

    try {
      const { data } = await axios.get(
        `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${encodeURIComponent(
          location
        )}`
      );

      console.log("Weather API Response:", data);

      if (data.error) {
        throw new Error(data.error.message);
      }

      setWeather(data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setError(
        error.response?.data?.error?.message ||
          error.message ||
          "Failed to fetch weather data"
      );
      setWeather(null);
    } finally {
      setLoading(false);
    }
  }, [location]);

  useEffect(() => {
    if (location.trim().length >= 3) {
      fetchWeather();
    }
  }, [location, fetchWeather]);

  const handleLocationChange = useCallback((e) => {
    setLocation(e.target.value);
  }, []);

  return (
    <div className="flex justify-center items-center bg-gradient-to-r from-gray-600 via-gray-700 to-gray-800 min-h-screen px-5">
      <div className="bg-gray-400 text-gray-800 shadow-xl border p-6 rounded-lg shadow-lg lg:max-w-xl max-w-md w-full">
        <div className="flex justify-center items-center gap-x-3 mb-6">
          <TiWeatherCloudy className="text-3xl text-sky-600" />
          <h1 className="text-3xl font-semibold text-center bg-gradient-to-r from-sky-500 via-gray-600 to-gray-800 bg-clip-text text-transparent">
            Weather App
          </h1>
        </div>

        <SearchInput
          location={location}
          handleLocationChange={handleLocationChange}
          setLocation={setLocation}
        />

        {loading ? (
          <Spinner />
        ) : error ? (
          <ErrorMsg message={error} />
        ) : weather ? (
          <WeatherInfo weather={weather} />
        ) : (
          <p className="text-center text-red-500">
            Unable to fetch weather data.
          </p>
        )}
      </div>
    </div>
  );
};

export default WeatherApp;
