import { RiCelsiusLine } from "react-icons/ri"
import { FaTemperatureHigh } from "react-icons/fa"
import { TbWind } from "react-icons/tb"


//Weather-Info-Icons-Part

const Weather = ({ data }) => {
    const url = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

    return (
        <div className="container-weather">
            <div className="container-weather-icon">
                <h1>{data.name}</h1>
                <img src={url} alt="sda" />
            </div>
            <div className="container-weather-info">
                <h1>
                    <FaTemperatureHigh />
                    {data.main.temp}
                    <RiCelsiusLine />
                </h1>
                <h1>
                    <TbWind />
                    {data.wind.speed}
                </h1>
            </div>
        </div>
    )
}

export default Weather;