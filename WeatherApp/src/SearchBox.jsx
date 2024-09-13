import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css';
import { useState } from 'react';
import InfoBox from './InfoBox';


export default function SearchBox({updateInfo})
{
    let [city,setCity] = useState("");
    let [error,setError] = useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "36c3c19360e2eb37bb0ba513cc5071b9";

    let getWeatherInfo = async()=>
    {
        try
        {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();
            // console.log(jsonResponse);
            let result = 
            {
                city : city,
                weather : jsonResponse.weather[0].description,
                temp : jsonResponse.main.temp,
                tempMin : jsonResponse.main.temp_min,
                tempMax :jsonResponse.main.temp_max,
                humidity : jsonResponse.main.humidity,
                feelsLike : jsonResponse.main.feels_like
            };  
            console.log(result);
            return result;
        }
        catch(err)
        {
            throw err;
        }
    }; 

    let handleChange = (evt)=>
    {
        setCity(evt.target.value);
    }

    let handleSubmit = async(evt)=>
    {
        try
        {
            evt.preventDefault();
            console.log(city);
            setCity("");
            let newinfo = await getWeatherInfo();
            updateInfo(newinfo);
        }
        catch(err)
        {
            setError(true);
        }
    }

    return(
        <div className='SearchBox'>
            
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="City Name" variant="outlined" value={city} onChange={handleChange}/>
                <br></br><br></br>
                <Button variant="contained" type="submit">SEARCH</Button>
                {error && <p style={{color:'red'}}>"Sorry, No such place in out api!"</p>}
            </form>
            
        </div>
    );
}
