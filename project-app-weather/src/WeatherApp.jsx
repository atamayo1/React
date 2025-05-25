import React, { useState } from 'react'
import './WeatherApp.css';

export const WeatherApp = () => {
    const baseUrl = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "9ae713961e59f18bfa025ac02d733440";
    const difKelvin = 273.15;
    const [weatherData, setWeatherData] = useState(null)

    const fetchWeatherData = async (city) => {
        try {
            const response = await fetch(`${baseUrl}?q=${city}&appid=${API_KEY}&lang=es`);
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const data = await response.json();
            console.log("data", data)
            setWeatherData(data);
        } catch (error) {
            console.error("Error fetching weather data:", error);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const city = e.target.search.value;
        if (city) {
            fetchWeatherData(city)
        }
    }

    return (
        <div className='container'>
            <h1>Weather App</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="search" placeholder='Enter your city' />
                <button type='submit'>Search</button>
            </form>
            {
                weatherData && (
                    <div className='weather-data'>
                        <h2>{weatherData.name}, {weatherData.sys.country}</h2>
                        <p>Temperature: {Math.floor(weatherData.main.temp - difKelvin)}°C</p>
                        <p>Weather: {weatherData.weather[0].description}</p>
                        <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt="Weather Icon" />
                    </div>
                )
            }
        </div>
    )
}
