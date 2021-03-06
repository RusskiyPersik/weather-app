import React from "react";
const Weather = 
    ({ 
        city, 
        country,
        temp,
        temp_max,
        temp_min,
        description,
        icon
    }) => {
        const iconUrl = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
        console.log(iconUrl);
        console.log(5);
        return (
            <>
                <div className="display-weather">
                    <div>
                        { temp ? <span><h2>{ Math.floor(temp) }&deg;</h2></span> : null }
                        { city && country ? <span><h2>{ city }, { country }</h2></span> : null }
                        { temp_min && temp_max 
                            ? <span><h3>{ Math.floor(temp_min) }&deg; - { Math.floor(temp_max) }&deg;</h3></span>
                            : null 
                        }
                        { icon ? <img src={iconUrl} /> : null }
                        <span><h3>{ description }</h3></span>
                    </div>
                </div>
            </>
        );
}
export default Weather;