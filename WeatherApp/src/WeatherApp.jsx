
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useScrollTrigger } from "@mui/material";
import { useState } from "react";

export default function WeatherApp()
{
    const [weatherInfo,setWeatherInfo]  = useState({
        city:"Delhi",
        feelsLike: 26.05,
        humidity:94,
        temp: 26.05,
        tempMax: 26.05,
        tempMin: 26.05,
        weather: "mist"
    });

    let updateInfo = (newinfo)=>
    {
        setWeatherInfo(newinfo);
    }

    return(
        <div style={{textAlign:"center"}}>
            <h2>Weather App</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info = {weatherInfo}/>
        </div>
    );
}