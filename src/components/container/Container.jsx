import { useEffect, useState } from "react";
import Search from "../search/Search";
import Weather from "../weather/Weather";
import "./Container.scss";
import axios from "axios";


//Getting data

const Container = () => {
    const [data, setData] = useState(null);
    const [location, setLocation] = useState('');
    const [error, setError] = useState(null);

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=264dd0a7abbe75e34c56b1bbdc08b685`

    async function getData() {
        try {
            const { data } = await axios.get(url)
            console.log(data);
            setData(data)
        } catch (error) {
            setError(error.massage);
        }
    }

    useEffect(() => {
        console.log(data);
    }, [data]);
    return (
        <div className="container">
            <Search location={location} setLocation={setLocation} getData={getData} />
            {data && <Weather data={data} />}
        </div>

    )
}

export default Container;