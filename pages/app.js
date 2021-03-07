import { useEffect, useState } from 'react';
import axios from 'axios';
import Head from 'next/head';

import { Forecast, MainWeather, SearchBar, WeatherInfo } from '../components';
import styles from '../styles/pages/App.module.css';

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [locationQuery, setLocationQuery] = useState('');
  const [weatherData, setWeatherData] = useState({ city: {}, weather: {} });

  let handleChange = event => {
    let searchValue = event.target.value;
    setSearchTerm(searchValue);
  };

  let handleKeyUp = event => {
    let key = event.keyCode;
    if (key === 13 && searchTerm !== '') { 
      setLocationQuery(searchTerm)
      fetchData(searchTerm)
    }
  }

  let fetchData = async () => {
    const data = await axios.get('/api/weather', {
      params: {
        location: searchTerm
      }
    });

    setWeatherData(data.data);
  }
  
  if (weatherData.city.name) {
    return(
      <div>
        <SearchBar searchTerm={searchTerm} handleChange={handleChange} handleKeyUp={handleKeyUp} />
        <div className={styles.container}>
          <div className={styles.innerContainer}>
            <MainWeather weatherData={weatherData} />
            <WeatherInfo weatherData={weatherData} />
            <hr />
            <Forecast weatherData={weatherData} />
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div>
        <SearchBar searchTerm={searchTerm} handleChange={handleChange} handleKeyUp={handleKeyUp} />
      </div>
    )
  }
}