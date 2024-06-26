import React, { useState } from "react";
import './weather.css';
import WeatherCard from "./WeatherCard";


function WeatherComponent(){

    
        const [weatherData, setWeatherData] = useState([
        { day: "Monday", condition: "Sunny", temperature: "32°C" },
         { day: "Tuesday", condition: "Windy", temperature: "22°C" },
         { day: "Wednesday", condition: "Rainy", temperature: "18°C" },
         {day:"Thursday",condition:"Stormy",temperature:"15°C" },
         {day:"Friday",condition:"Cloudy",temperature:"12°C" }
     ]
     );
        
       
        return (
            <div>
            {weatherData.map((weather, index) => (
            <WeatherCard
            key={index}
            day={weather.day}
            condition={weather.condition}
            temperature={weather.temperature}
            />
            ))}
            </div>
            );

}

export default WeatherComponent;