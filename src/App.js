import React from 'react';
import axios from "axios";
import "./App.css";
import Weather from "./weather.js";
import Form from "./form.js";


const App = () => {
    const [city, setCity] = React.useState("");
    const [country, setCountry] = React.useState("");
    const [icon, setIcon] = React.useState("");
    const [description, setDescription] = React.useState("");
    const [temp_min, setTemp_min] = React.useState("");
    const [temp_max, setTemp_max] = React.useState("");
    const [temp, setTemp] = React.useState("");

    const api_key = '2f74f47bf4d845ad7fc7562edb40f7e9';
    // const [error, setError] = useState(false);
    const getWeather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        console.log("got here")
        if (city && country) {

            const api_call = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${api_key}&units=imperial`);

            setCity(api_call.data.name)
            setCountry(api_call.data.sys.country);
            setTemp(api_call.data.main.temp);
            setTemp_max(api_call.data.main.temp_max);
            setTemp_min(api_call.data.main.temp_min);
            setDescription(api_call.data.weather[0].description);
            setIcon(api_call.data.weather[0].icon);

            console.log(api_call);
        }
    }
    return (
        <div className="App">
            <Weather 
                city = {city} 
                country = {country} 
                temp = {temp} 
                temp_max = {temp_max}
                temp_min = {temp_min}
                description = {description}
                icon = {icon}
            />
            <Form loadWeather={getWeather} />
        </div>
    )
}
export default App;